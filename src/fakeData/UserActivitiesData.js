import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faCommentAlt,
  faFileInvoice,
  faHistory,
  faKey,
  faLocationArrow,
  faMask,
  faPlusCircle,
  // eslint-disable-next-line prettier/prettier
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const userData = [
  {
    id: 1,
    name: "Address Book",
    icon: <FontAwesomeIcon icon={faAddressBook} className="text-success" />,
    path: "/address-book",
  },
  {
    id: 2,
    name: "Generate API Key",
    icon: <FontAwesomeIcon icon={faKey} className="text-success" />,
    path: "/generate-api-key",
  },
  {
    id: 3,
    name: "SMS Template",
    icon: <FontAwesomeIcon icon={faCommentAlt} className="text-success" />,
    path: "/sms-template",
  },
  {
    id: 4,
    name: "My Masking (CLI)",
    icon: <FontAwesomeIcon icon={faMask} className="text-success" />,
    path: "/my-masking",
  },
  {
    id: 5,
    name: "Quick SMS",
    icon: <FontAwesomeIcon icon={faLocationArrow} className="text-success" />,
    path: "/quick-sms",
  },
  {
    id: 6,
    name: "Variable SMS",
    icon: <FontAwesomeIcon icon={faTag} className="text-success" />,
    path: "/variable-sms",
  },
  {
    id: 7,
    name: "Create Campaign",
    icon: <FontAwesomeIcon icon={faPlusCircle} className="text-success" />,
    path: "/create-campaign",
  },
  {
    id: 8,
    name: "SMS History",
    icon: <FontAwesomeIcon icon={faHistory} className="text-success" />,
    path: "/sms-history",
  },
  {
    id: 9,
    name: "Quick SMS History",
    icon: <FontAwesomeIcon icon={faHistory} className="text-success" />,
    path: "/quick-sms-history",
  },
  {
    id: 10,
    name: "Variable SMS History",
    icon: <FontAwesomeIcon icon={faHistory} className="text-success" />,
    path: "/variable-sms-history",
  },
  {
    id: 11,
    name: "Campaign SMS History",
    icon: <FontAwesomeIcon icon={faHistory} className="text-success" />,
    path: "/campaign-sms-history",
  },
  {
    id: 12,
    name: "Invoice",
    icon: <FontAwesomeIcon icon={faFileInvoice} className="text-success" />,
    path: "/invoice",
  },
];

export default userData;
