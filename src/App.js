import './App.css';
import Box from './components/Box';
// import { useState } from 'react';

function App() {
  // const [triangles, setTriangles] = useState(new Array(20).fill(false));

  // function triangle0(svg, x, y, w, h) {
  //     tri(svg, x, y, x + w, y, x, y + h)
  // }

  const triangles = [];
  const width = 800;
  const height = 800;
  const tiles = 8;
  const w = width / tiles;
  const h = height / tiles;
  let colors = ['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']

  function rand(m) {
      return Math.floor(Math.random() * Math.floor(m))
  }

  // const traingle1 = (x, y, w, h) => {
  //   // console.log(x, y, x + w, y, x, y + h);
  //   makeTriangle(x, y, x + w, y, x, y + h)
  // }

  // const makeTriangle = (x1, y1, x2, y2, x3, y3) => {
  //   console.log(x1 + "," + y1, x2 + "," + y2, x3 + "," + y3);
  //   const points = (x1 + "," + y1, x2 + "," + y2, x3 + "," + y3);
  //   console.log(points)
  //   return (<polygon points={points}></polygon>)
  //   // return (<polygon points={`${x1}`}{`${y1}`}{`${x2}`}{`${y2}`}{`${x3}`}{`${y3}`}
  //   // return <polygon points="`${x1},${y1} ${x2},${y2} ${x3},${y3}`"></polygon>
  // }

  // const triangle = makeTriangle();
  // console.log(triangle);
  // console.log(triangles);
  // triangles.push(triangle);

  for (let row = 0; row < tiles; row++) {
      for (let col = 0; col < tiles; col++) {
        const triangle = {};
          const x = col * w
          const y = row * h
          const c = colors[rand(colors.length)]
          const trianglePoints1 = [
            [x, y],
            [x + w, y],
            [x, y + h]
          ];
          const trianglePoints2 = [
            [x + w, y],
            [x + w, y + h],
            [x, y]
          ];
          const trianglePoints3 = [
            [x + w, y + h],
            [x, y + h],
            [x + w, y]
          ];
          const trianglePoints4 = [
            [x, y],
            [x + w, y],
            [x, y + h]
          ];
          let r = rand(4)
          switch (r) {
            case 0:
              triangle.points = trianglePoints1;
              break
            case 1:
              triangle.points = trianglePoints2;
              break
            case 2:
              triangle.points = trianglePoints3;
              break
            case 3:
              triangle.points = trianglePoints4;
              break
            default:
              triangle.points = trianglePoints1;
              break
            }
          triangle.color = c;
          console.log(triangle);
          triangles.push(triangle);
          // console.log("for loops");
      }
  }

  console.log(triangles);

  return (
    <div className="App">
      {/* <button onClick={handleAddBox}>Add</button> */}
      <svg width={width} height={height}>
        {
          triangles.map((triangle, i) => {
            return <polygon points={
              (triangle.points).map(point => point.join(',')).join(' ')} 
              key={i} fill={triangle.color}></polygon>
          })
        }
      </svg>
    </div>
  );
}

export default App;











// eerste keer undefined
// console.log vs points
