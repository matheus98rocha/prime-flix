import { useEffect } from "react";
import RoutesApp from "./routes";

import { ToastContainer, toast,Slide  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      toast.info("✌️Contribua com nosso projeto, clique para entrar em contato!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "contactToast"
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      <a
        href="https://www.linkedin.com/in/matheus-rocha-79185b169/"
        target="_blank"
        rel="noreferrer"
      >
        <ToastContainer transition={Slide} />
      </a>
      <RoutesApp />
    </div>
  );
}

export default App;
