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
  }

  return (
    <div className="App" style={appStyle}>
      <h1>React Color Picker</h1>
      <h2>Click on palette to choose color</h2>

      <SketchPicker
      color={currentColor}
      onChangeComplete={handleOnChange}
      />

      <h1>Here's your color code: {currentColor}</h1>
    </div>
  );
}

export default App;
