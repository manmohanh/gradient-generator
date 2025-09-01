import { useEffect, useState } from "react";
import "./App.css";
import GradientCard from "./components/GradientCard";
import { ToastContainer } from "react-toastify";

function App() {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradients, setGradients] = useState(["dhfsk"]);

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const intValue = Math.floor(random);
    const hexCode = intValue.toString(16);
    const colorHex = hexCode.padStart(6, "0");
    return `#${colorHex}`;
  };

  const generateGradient = () => {
    const colors = [];

    for (let i = 0; i < num; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;

      if (type === "linear") {
        colors.push({
          gradient: `linear-gradient(${degreeString},${color1},${color2})`,
          css: `background:'linear-gradient(${degreeString},${color1},${color2})'`,
        });
      } else {
        colors.push({
          gradient: `radial-gradient(circle,${color1},${color2})`,
          css: `background:'radial-gradient(circle,${color1},${color2})'`,
        });
      }
    }
    setGradients(colors);
  };

  useEffect(() => {
    generateGradient();
  }, [num,type]);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="w-9/12 mx-auto space-y-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">🎨Gradient Generator</h1>
          <div className="flex gap-4">
            <input
              value={num}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              placeholder="12"
              onChange={(e) => setNum(Number(e.target.value))}
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {gradients.map((item, index) => (
            <GradientCard key={index} item={item} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
