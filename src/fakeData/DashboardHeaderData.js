import { faHistory, faLocationArrow, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHeaderData = [
  {
    id: 1,
    name: "Quick SMS",
    number: 3345,
    icon: <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: "35px" }} />,
  },
  {
    id: 2,
    name: "Schedule SMS",
    number: 657,
    icon: <FontAwesomeIcon icon={faHistory} style={{ fontSize: "35px" }} />,
  },
  {
    id: 3,
    name: "Variable SMS",
    number: 4238,
    icon: <FontAwesomeIcon icon={faTags} style={{ fontSize: "35px" }} />,
  },
];

export default DashboardHeaderData;
