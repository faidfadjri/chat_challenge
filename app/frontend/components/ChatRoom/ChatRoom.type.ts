import { message } from "@/types/message.type";

export interface ChatRoomProps {
    messages: message[];
    clientId: string;
    currentMessage: string;
    setCurrentMessage: (message: string) => void;
    handleSendMessage: (e: React.FormEvent) => void;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
}