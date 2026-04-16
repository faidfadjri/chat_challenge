export interface ChannelFormProps {
  roomName: string;
  setRoomName: (roomName: string) => void;
  handleJoin: (e: React.FormEvent) => void;
}
