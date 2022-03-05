import PropTypes from 'prop-types';
import { useStore } from "../store";
// import { useState } from 'react';



const Drawing = ({ width, height}) => {
  
  const size = useStore(state => state.size);
  const color = useStore(state => state.color);
  const colorPalette = useStore(state => state.colorPalette);
  const switchColors = useStore(state => state.switchColors);
  const switchBackground = useStore(state => state.switchBackground);
  const gradient1 = useStore(state => state.gradient1);
  const gradient2 = useStore(state => state.gradient2);
  // const [polygons, render] = useState({});
  // const [triangles, setTriangles] = useState([]);
  const triangles = [];
  const tiles = size;
  const w = width / tiles;
  const h = height / tiles;
  let c;
  let colors1 = ['#FFC857', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']
  let colors2 = ['#5463FF', '#FFFFFF', '#FFC300', '#FF1818']
  let colors3 = ['#fffffc', '#ffc6ff', '#bdb2ff', '#a0c4ff', '#fdffb6']
  let colors4 = ['#606c38', '#283618', '#fefae0', '#dda15e', '#bc6c25']
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
              case "Curious":
                c = colors1[rand(colors1.length)]
                break
              case "Bold":
                c = colors2[rand(colors2.length)]
                break
              case "Soft":
                c = colors3[rand(colors3.length)]
                break
              case "Earth":
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

      // const svgStyle = "background: linear-gradient(to left, #6699ff 0%," + colors1[0] + " 100%)"
      // console.log(svgStyle);

      console.log(triangles);
  return (
    <>
        {switchBackground ?
          <>  <svg className='svg' id='svg' width={width} height={height} 
  style={{background: 'linear-gradient(to bottom, ' + gradient1 + ' 0%,' + gradient2 + ' 100%)'}}>
        {
            triangles.map((triangle, i) => {
            return <polygon points={
                (triangle.points).map(point => point.join(',')).join(' ')} 
                key={i} fill={triangle.color}></polygon>
            })
        }
    </svg>
          </>:
          <>  <svg className='svg' id='svg' width={width} height={height} >
        {
            triangles.map((triangle, i) => {
            return <polygon points={
                (triangle.points).map(point => point.join(',')).join(' ')} 
                key={i} fill={triangle.color}></polygon>
            })
        }
    </svg></>
          
        }
    </>
);
}

Drawing.defaultProps = {
  radius: 20
}


//! ALLE PROPTYPES CONTROLLEREN!! !//


Drawing.propTypes = {
  radius: PropTypes.number.isRequired,
}


export default Drawing;