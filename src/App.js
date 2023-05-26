import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
