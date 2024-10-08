interface Modal {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
}

interface ModalProps {
  modal: Modal;
}

interface ModalStepProps {
  modal: Modal;
  nextModal: Modal;
}

interface ConfirmationProps {
  setProgress: (activeStep: ActiveStep) => void;
}

interface PayWithCardModalProps {
  modal: Modal;
  newCardModal: Modal;
  paymentConfirmationModal: Modal;
}

interface NavContentProps {
  sidebar: DisclosureReturn;
}

interface SidebarProps {
  sidebar: DisclosureReturn;
}

interface TradeProps {
  setIsTradeActive: (isTradeActive: boolean) => void;
}

interface SelectedTabProps {
  text: string;
  tab: FC<ModalProps>;
}

interface PasswordProps {
  text: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CommentProps {
  imageSrc: string;
  text: string;
  timeStamp: string;
  name: string;
  line: boolean;
}

interface AnalyticsCardProps {
  heading: string;
  icon: string;
  value: number;
  percentageChange: number;
  timeStamp: string;
}

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

interface Events {
  _id: string;
  title: string;
  write_up: string;
  date: string | number | Date;
  link: string;
  location: string;
  image: string;
}

interface User {
  _id: string;
  email: string;
  name: string;
}

interface Offer {
  _id: string;
  name: string;
  price: number;
  pieces: number;
  partners: number;
  date: string;
  end_date: string;
  image: string;
  status: string;
}

interface Partner {
  _id: string;
  email: string;
  company_type: string;
  name: string;
  contact: string;
  location: string;
  description: string;
  checked: boolean;
  createdAt: string;
  image: string;
  ucoin: number;
}

interface PartnershipOfferProps {
  _id: string;
  name: string;
  price: number;
  end_date: string;
}
