import "./App.css";
import StyeldText from "./components/StyledText";
import AlertButton from "./components/AlertButton/index";

function App() {
  return (
    <>
      <StyeldText>Me deixe em CapsLock!</StyeldText>
      <AlertButton label="você clicou no botão!"></AlertButton>
    </>
  );
}

export default App;
