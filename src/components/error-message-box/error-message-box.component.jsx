import { Alert } from "shards-react";
import "./error-message-box.styles.scss";

const ErrorMessageBox = (props) => {
  return (
    <Alert
      className="error-info-alert"
      theme="danger"
      variant={props.variant || "info"}
    >
      {props.children}
    </Alert>
  );
};
export default ErrorMessageBox;
