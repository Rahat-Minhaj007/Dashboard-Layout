import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const adminData = [
  {
    id: 1,
    name: "Company Wallet",
    icon: <FontAwesomeIcon icon={faWallet} className="text-success" />,
    path: "/company-wallet",
  },
  {
    id: 2,
    name: "Operator Credential",
    icon: <FontAwesomeIcon icon={faLock} className="text-success" />,
    path: "/",
  },
  {
    id: 3,
    name: "Available User",
    icon: <FontAwesomeIcon icon={faUser} className="text-success" />,
    path: "",
  },
];

export default adminData;
