export interface ChatMessage {
  message: string;
  user?: string;
  type: 'usermessage' | 'servernotice';
}
