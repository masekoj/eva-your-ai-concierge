export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'card' | 'carousel' | 'quick-replies';
  data?: MessageData;
}

export interface MessageData {
  cards?: CardData[];
  quickReplies?: QuickReply[];
  image?: string;
}

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  price?: number;
  details?: string[];
  action?: {
    label: string;
    type: 'book' | 'info' | 'link';
    value?: string;
  };
}

export interface QuickReply {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export interface ConversationContext {
  userName?: string;
  lastTopic?: string;
  bookingIntent?: BookingIntent;
  preferences?: UserPreferences;
}

export interface BookingIntent {
  roomType?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  children?: number;
}

export interface UserPreferences {
  language?: string;
  interests?: string[];
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  context: ConversationContext;
}
