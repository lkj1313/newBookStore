import { useDarkMode } from "../shared/hooks/useDarkMode";
import Router from "./Router";

function App() {
  useDarkMode();

  return (
    <>
      {" "}
      <Router />
    </>
  );
}

export default App;
