import { useState } from "react";
import {SketchPicker} from "react-color";
import "./App.css";

function App() {

  const [currentColor, setCurrentColor] = useState("#ff6")
  const handleOnChange = (color) => {
    setCurrentColor(color.hex)
  }

  const appStyle = {
    backgroundColor: currentColor,
    height: "100vh",
    textAlign: "center",
  }

  return (
    <div className="App" style={appStyle}>
      <h1>React Color Picker</h1>
      <h2>does it update?</h2>

      <SketchPicker
      color={currentColor}
      onChangeComplete={handleOnChange}
      />


    </div>
  );
}

export default App;
