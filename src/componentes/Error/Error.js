import "./error.css";
const Error = ({ error }) => {
  return (
    <div className="wrapper">
      <h2>An error has occurred: {error}</h2>
    </div>
  );
};

export default Error;
