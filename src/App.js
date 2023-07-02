import { useState } from "react";
import {SketchPicker} from "react-color";
import "./App.css";

function App() {

  const [currentColor, setCurrentColor] = useState("#ff6")

  return (
    <div className="App">
      <h1>React Color Picker</h1>

      <SketchPicker
      color={currentColor}
      />
    </div>
  );
}

export default App;
