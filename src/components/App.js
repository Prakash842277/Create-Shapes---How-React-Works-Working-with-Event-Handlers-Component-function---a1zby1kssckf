import React, {useState} from "react";
import "../styles/App.css";
const App= () => {
  const [shapes, setShapes] = useState([]);
  const [selected, setSelected]=useState("square");
  consthandleAddShape = () =>{
    const oldShape = [...shapes];
    oldShapes .push(selected.toLowerCase());
    setShape(oldShapes);
    console.log(shapes);
  };
  return (
    <div id="main">
    <div id="shape-creator"></div>
    <select onChange={(e) => setSelected(e.target.value)} value={selected}>
    <option id="option-square">Square</option>
<option id="option-circle">Circle</option>
</select>
<button onClick={handleAddShape}>Add Shape</button>
<div id="shape-holder">
  {shape.map((eachShape, index) =>(
    <div className = {eachShape} key = {index}>
    <option id="option-square">Square</option>
<option id="option-circle">Circle</option>
</select>
<button onClick={handleAddShape}>Add Shape</button>
<div id="shapes-holder">
  {shapes.map((eachShape, index) => {
    <div className={eachShape} key={index}>
      {index}
    </div>
    ))}
</div>
</div>
);
};
export default App;
