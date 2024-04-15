import reactLogo from "./assets/react.svg";
import "./App.css";
import Notification from "./components/Notification";
import { requestPermission } from "./firebase.js";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={requestPermission}>Allow Notification</button>
      <Notification />
    </>
  );
}

export default App;
