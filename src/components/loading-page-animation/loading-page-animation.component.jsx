import { Spinner } from "reactstrap";
import "./loading-page-animation.styles.scss";

const LoadingPageAnimation = () => {
  return (
    <Spinner
      className="loading-spinner"
      animation="border"
      size="100px"
      variant="info"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>{" "}
      {/* a loading text will be shown if spinner doesnt work */}
    </Spinner>
  );
};

export default LoadingPageAnimation;
