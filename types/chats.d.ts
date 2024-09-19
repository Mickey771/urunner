interface CommunityChatProps {
  chats: Chats[];
  userId: number;
}

interface Chats {
  senderId: number;
  name: string;
  timestamp: string;
  text: string;
  image: boolean;
  imageSrc: string;
  profilePic: string;
}

interface AddChatFormProps {
  handleSubmit: (e: FormEvent, message: string) => void;
  message: string;
  handleChange: (e: HTMLInputElement) => void;
}
