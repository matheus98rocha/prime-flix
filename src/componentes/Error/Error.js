import "./error.styles.js";
import { ErrorMessage, Wrapper } from "./error.styles.js";

const Error = ({ error }) => {
  return (
    <Wrapper>
      <ErrorMessage>An error has occurred: {error}</ErrorMessage>
    </Wrapper>
  );
};

export default Error;
