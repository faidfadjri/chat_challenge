import { SenderFormProps } from "./SenderForm.type";

export const SenderForm = ({
  currentMessage,
  setCurrentMessage,
  handleSendMessage,
}: SenderFormProps) => {
  return (
    <div className="input-area">
      <form className="chat-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="btn-send"
          disabled={!currentMessage.trim()}
        >
          <svg viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
};
