import "./App.css";
import CapsLock from "./components/CapsLock";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <CapsLock>Me deixe em CapsLock!</CapsLock>
      <Button label="você clicou no botão!"></Button>
    </div>
  );
}

export default App;
