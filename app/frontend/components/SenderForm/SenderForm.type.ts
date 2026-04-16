export interface SenderFormProps {
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
}
