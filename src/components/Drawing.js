import PropTypes from 'prop-types';
import { useStore } from "../store";
// import { useState } from 'react';



const Drawing = ({ width, height}) => {
  
  const size = useStore(state => state.size);
  const color = useStore(state => state.color);
  const colorPalette = useStore(state => state.colorPalette);
  const switchColors = useStore(state => state.switchColors);
  // const [polygons, render] = useState({});
  // const [triangles, setTriangles] = useState([]);
  const triangles = [];
  const tiles = size;
  const w = width / tiles;
  const h = height / tiles;
  let c;
  let colors1 = ['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']
  let colors2 = ['#f4f1de', '#e07aFF', '#3d405b', '#81b29a', '#12cc8f']
  let colors3 = ['#BBf1de', '#e07a5f', '#33405b', '#81b29a', '#f2cc8f']
  let colors4 = ['#f4f1de', '#00885f', '#3d405b', '#00b29a', '#f2BB8f']
  //let c = colors[rand(colors.length)]


  function rand(m) {
      return Math.floor(Math.random() * Math.floor(m))
  }

  // const render = () => {
      for (let row = 0; row < tiles; row++) {
      for (let col = 0; col < tiles; col++) {
        const triangle = {};
          const x = col * w
          const y = row * h
          if (switchColors) {
            switch (colorPalette) {
              case "Blue":
                c = colors1[rand(colors1.length)]
                break
              case "Orange":
                c = colors2[rand(colors2.length)]
                break
              case "Purple":
                c = colors3[rand(colors3.length)]
                break
              case "Red":
                c = colors4[rand(colors4.length)]
                break
              default:
                c = colors1[rand(colors1.length)]
                break
              }
          } else {
            c = color
          }
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
         // console.log(triangle);
          triangles.push(triangle);
        }
      }
      // }
      // render();



      // const handleBoxClick = (index) => {
      //   // make a copy
      //   const tmp = [...triangles];
      //   // alter the value at a certain location
      //   (tmp[index]).points = 1;
      //   // set the copy as the new state
      //   setTriangles(tmp);
      // }

      console.log(triangles);
  return (
  <svg id='svg' width={width} height={height}>
        {
            triangles.map((triangle, i) => {
            return <polygon points={
                (triangle.points).map(point => point.join(',')).join(' ')} 
                key={i} fill={triangle.color}></polygon>
            })
        }
    </svg>);
}

Drawing.defaultProps = {
  radius: 20
}


//! ALLE PROPTYPES CONTROLLEREN!! !//


Drawing.propTypes = {
  radius: PropTypes.number.isRequired,
}


export default Drawing;