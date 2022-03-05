import PropTypes from 'prop-types';


const Drawing = ({ width, height, color, size }) => {

  const triangles = [];
  const tiles = size;
  const w = width / tiles;
  const h = height / tiles;
  let colors = ['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']

  const svgStyling = {
    stroke:"#000"
  };

  function rand(m) {
      return Math.floor(Math.random() * Math.floor(m))
  }

      for (let row = 0; row < tiles; row++) {
      for (let col = 0; col < tiles; col++) {
        const triangle = {};
          const x = col * w
          const y = row * h
          const c = color;
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
          // console.log("for loops");
      }
  }
  console.log(color)
  return (
    <>
      <svg className='svg'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.34 323.94" width="100" style={svgStyling}>
        <path 
          id="cls-1" 
          d="M537.42,313.1A161.17,161.17,0,0,0,698.69,151.84" 
          transform="translate(-537.42 -151.84)"
          strokeMiterlimit="10"
          fill="none"
          />
        <path 
          id="cls-1" 
          d="M860.76,314.51A161.17,161.17,0,0,0,699.5,475.77" 
          transform="translate(-537.42 -151.84)"
          strokeMiterlimit="10"
          fill="none"/>
      </svg>
    </>
  )
}

Drawing.defaultProps = {
  radius: 20
}

Drawing.propTypes = {
  radius: PropTypes.number.isRequired,
}


export default Drawing;