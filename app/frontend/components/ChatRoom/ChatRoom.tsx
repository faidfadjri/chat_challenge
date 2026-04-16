import { SenderForm } from '../SenderForm';
import type { ChatRoomProps } from './ChatRoom.type';

export const ChatRoom = ({
  messages,
  clientId,
  currentMessage,
  setCurrentMessage,
  handleSendMessage,
  messagesEndRef
}: ChatRoomProps) => {

  return (
    <div className="chat-area">
      <div className="message-list">
        {messages.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            No messages yet. Send one below!
          </div>
        ) : (
          messages.map((msg) => {
            const isMine = msg.senderId === clientId;
            return (
              <div
                key={msg.id}
                className={`message-wrapper ${isMine ? "message-mine" : "message-other"}`}
              >
                <div className="message-bubble">
                  <p>{msg.content}</p>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <SenderForm
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};
