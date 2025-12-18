import { useState, useCallback } from 'react';
import { Message, ConversationContext, QuickReply, CardData } from '@/types/chat';
import { hotelKnowledge } from '@/data/hotelKnowledge';

const generateId = () => Math.random().toString(36).substring(2, 15);

const initialQuickReplies: QuickReply[] = [
  { id: '1', label: 'View Rooms', value: 'Show me your rooms', icon: 'bed' },
  { id: '2', label: 'Dining Options', value: 'What dining options do you have?', icon: 'dining' },
  { id: '3', label: 'Activities', value: 'What activities are available?', icon: 'activities' },
  { id: '4', label: 'Book a Room', value: 'I want to book a room', icon: 'calendar' },
  { id: '5', label: 'Contact Info', value: 'How can I contact the hotel?', icon: 'phone' },
];

const welcomeMessage: Message = {
  id: generateId(),
  role: 'assistant',
  content: `Moni! 👋 Welcome to Sunbird Lilongwe - your Oasis in the City!

I'm Eva, your personal virtual assistant. I'm here to help you with:

• Room bookings and availability
• Restaurant reservations
• Local activities and tours
• Any questions about our hotel

How may I assist you today?`,
  timestamp: new Date(),
  type: 'quick-replies',
  data: {
    quickReplies: initialQuickReplies,
  },
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({});

  const generateResponse = useCallback((userMessage: string): { content: string; data?: Message['data'] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Room inquiries
    if (lowerMessage.includes('room') || lowerMessage.includes('accommodation') || lowerMessage.includes('stay')) {
      const cards: CardData[] = hotelKnowledge.rooms.map(room => ({
        id: room.id,
        title: room.name,
        description: room.description,
        image: room.image,
        price: room.priceFrom,
        details: [room.guests, room.beds, room.size],
        action: {
          label: 'Book Now',
          type: 'link',
          value: hotelKnowledge.contact.bookingUrl,
        },
      }));

      return {
        content: `We have three wonderful room types at Sunbird Lilongwe. Each offers comfort and modern amenities for a relaxing stay:`,
        data: {
          cards,
          quickReplies: [
            { id: '1', label: 'Book a Room', value: 'I want to book a room', icon: 'calendar' },
            { id: '2', label: 'Room Amenities', value: 'What amenities are included?', icon: 'sparkles' },
            { id: '3', label: 'Check-in Info', value: 'What are the check-in times?', icon: 'help' },
          ],
        },
      };
    }

    // Dining inquiries
    if (lowerMessage.includes('dining') || lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('bar') || lowerMessage.includes('drink')) {
      const cards: CardData[] = hotelKnowledge.dining.map(venue => ({
        id: venue.id,
        title: venue.name,
        description: venue.description,
        image: venue.image,
        details: [venue.type, Object.values(venue.hours).join(' • ')],
      }));

      return {
        content: `We offer excellent dining experiences at Sunbird Lilongwe! Here are our venues:`,
        data: {
          cards,
          quickReplies: [
            { id: '1', label: 'Breakfast Hours', value: 'What time is breakfast?', icon: 'dining' },
            { id: '2', label: 'Make Reservation', value: 'I want to make a restaurant reservation', icon: 'calendar' },
          ],
        },
      };
    }

    // Activities
    if (lowerMessage.includes('activity') || lowerMessage.includes('activities') || lowerMessage.includes('tour') || lowerMessage.includes('things to do') || lowerMessage.includes('explore')) {
      const cards: CardData[] = hotelKnowledge.activities.map(activity => ({
        id: activity.id,
        title: activity.name,
        description: activity.description,
        image: activity.image,
      }));

      return {
        content: `Lilongwe and its surroundings offer amazing experiences! Here are some activities we can arrange for you:`,
        data: {
          cards,
          quickReplies: [
            { id: '1', label: 'Arrange Tour', value: 'I want to arrange a tour', icon: 'activities' },
            { id: '2', label: 'Lake Malawi Trip', value: 'Tell me more about Lake Malawi', icon: 'location' },
          ],
        },
      };
    }

    // Booking intent
    if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('reservation')) {
      return {
        content: `I'd be happy to help you with a booking! 

You can book directly through our secure reservation system. Simply click the button below to check availability and complete your booking:

📅 [Book Your Stay](${hotelKnowledge.contact.bookingUrl})

Or if you prefer, you can contact our reservations team directly:
📧 ${hotelKnowledge.contact.email}
📞 ${hotelKnowledge.contact.phone.join(' / ')}

Would you like me to tell you more about our rooms first?`,
        data: {
          quickReplies: [
            { id: '1', label: 'View Rooms', value: 'Show me your rooms', icon: 'bed' },
            { id: '2', label: 'Special Offers', value: 'Are there any special offers?', icon: 'sparkles' },
          ],
        },
      };
    }

    // Contact information
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('address')) {
      return {
        content: `Here's how you can reach us at Sunbird Lilongwe:

📍 **Address:** ${hotelKnowledge.location.address}

📧 **Email:** ${hotelKnowledge.contact.email}

📞 **Phone:** ${hotelKnowledge.contact.phone.join(' / ')}

Our reception is available 24/7 to assist you!`,
        data: {
          quickReplies: [
            { id: '1', label: 'Get Directions', value: 'How do I get to the hotel?', icon: 'location' },
            { id: '2', label: 'Airport Transfer', value: 'Do you have airport transfers?', icon: 'help' },
          ],
        },
      };
    }

    // Check-in/check-out times
    if (lowerMessage.includes('check-in') || lowerMessage.includes('check in') || lowerMessage.includes('check-out') || lowerMessage.includes('check out')) {
      return {
        content: `Our check-in and check-out times are:

🕐 **Check-in:** ${hotelKnowledge.policies.checkIn}
🕙 **Check-out:** ${hotelKnowledge.policies.checkOut}

Need early check-in or late check-out? Just let us know in advance and we'll do our best to accommodate your request, subject to availability!`,
        data: {
          quickReplies: [
            { id: '1', label: 'Book Room', value: 'I want to book a room', icon: 'calendar' },
            { id: '2', label: 'Amenities', value: 'What amenities do you have?', icon: 'sparkles' },
          ],
        },
      };
    }

    // Amenities
    if (lowerMessage.includes('amenities') || lowerMessage.includes('facilities') || lowerMessage.includes('wifi') || lowerMessage.includes('pool')) {
      return {
        content: `Sunbird Lilongwe offers wonderful amenities for our guests:

${hotelKnowledge.amenities.map(a => `✓ ${a}`).join('\n')}

Is there a specific facility you'd like to know more about?`,
        data: {
          quickReplies: [
            { id: '1', label: 'View Rooms', value: 'Show me your rooms', icon: 'bed' },
            { id: '2', label: 'Conference', value: 'Tell me about conference facilities', icon: 'help' },
          ],
        },
      };
    }

    // Location/directions
    if (lowerMessage.includes('location') || lowerMessage.includes('direction') || lowerMessage.includes('where') || lowerMessage.includes('find')) {
      return {
        content: `Sunbird Lilongwe is centrally located in the heart of Malawi's capital:

📍 **Address:** ${hotelKnowledge.location.address}

${hotelKnowledge.location.description}

We're easily accessible from Lilongwe International Airport. Would you like us to arrange airport transfer?`,
        data: {
          quickReplies: [
            { id: '1', label: 'Airport Transfer', value: 'Yes, arrange airport transfer', icon: 'help' },
            { id: '2', label: 'Local Attractions', value: 'What attractions are nearby?', icon: 'activities' },
          ],
        },
      };
    }

    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|moni|good morning|good afternoon|good evening)/i)) {
      const timeOfDay = new Date().getHours();
      let greeting = 'Hello';
      if (timeOfDay < 12) greeting = 'Good morning';
      else if (timeOfDay < 18) greeting = 'Good afternoon';
      else greeting = 'Good evening';

      return {
        content: `${greeting}! 🌿 Welcome to Sunbird Lilongwe! I'm Eva, your personal concierge.

How may I assist you today? Whether you're looking to book a room, make a dining reservation, or explore local attractions - I'm here to help!`,
        data: {
          quickReplies: initialQuickReplies,
        },
      };
    }

    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return {
        content: `You're very welcome! 😊 It's my pleasure to assist you.

Is there anything else I can help you with? Feel free to ask about our rooms, dining, activities, or anything else!`,
        data: {
          quickReplies: [
            { id: '1', label: 'View Rooms', value: 'Show me your rooms', icon: 'bed' },
            { id: '2', label: 'Book Now', value: 'I want to book a room', icon: 'calendar' },
          ],
        },
      };
    }

    // Default response
    return {
      content: `Thank you for your message! While I may not have the exact information you're looking for, I'd be happy to help you with:

• Room bookings and information
• Dining and restaurant reservations  
• Local activities and tours
• Hotel amenities and facilities
• Contact and location details

Please feel free to ask about any of these topics, or contact our team directly at ${hotelKnowledge.contact.email}`,
      data: {
        quickReplies: initialQuickReplies,
      },
    };
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Generate response
    const response = generateResponse(content);

    const assistantMessage: Message = {
      id: generateId(),
      role: 'assistant',
      content: response.content,
      timestamp: new Date(),
      data: response.data,
    };

    setIsTyping(false);
    setMessages(prev => [...prev, assistantMessage]);
  }, [generateResponse]);

  return {
    messages,
    isTyping,
    context,
    sendMessage,
    setContext,
  };
}
