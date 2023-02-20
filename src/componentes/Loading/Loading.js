import { Watch } from "react-loader-spinner";
import "./loading.styles.js";
import { Wrapper } from "./loading.styles.js";

const Loading = () => {
  return (
    <Wrapper>
      <Watch
        height="60"
        width="60"
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
};

export default Loading;
