import { Watch } from "react-loader-spinner";
import "./loading.css";

const Loading = () => {
  return (
    <div className="wrapper">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
