import { ChannelFormProps } from "./ChannelForm.type";

export const ChannelForm = ({
  roomName,
  setRoomName,
  handleJoin,
}: ChannelFormProps) => {
  return (
    <div className="join-overlay">
      <div className="join-title">Welcome to the Chat</div>
      <div className="join-subtitle">
        Enter a dynamic channel name below to join or create a specific room.
      </div>
      <form
        onSubmit={handleJoin}
        style={{ display: "flex", gap: "8px", zIndex: 10 }}
      >
        <input
          type="text"
          className="message-input"
          placeholder="Channel Name..."
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          autoFocus
          style={{ minWidth: "250px" }}
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={!roomName.trim()}
        >
          Join Channel
        </button>
      </form>
    </div>
  );
};
