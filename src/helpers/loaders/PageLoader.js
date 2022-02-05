import { BallTriangle } from "react-loader-spinner";
import "../../styles/PageLoader.css";

const PageLoader = () => (
  <div className="spinner">
    <BallTriangle heigth={100} width={100} color="green" />
  </div>
);

export default PageLoader;
