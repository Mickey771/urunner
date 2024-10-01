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
  value: string;
  percentageChange: number;
  timeStamp: string;
}

interface Events {
  _id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}
