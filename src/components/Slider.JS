const Box = ({ index, tiles}) => {

  // const colors = ['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']

  // function random(m) {
  //     return Math.floor(Math.random() * Math.floor(m))
  // }

  // const c = colors[rand(colors.length)]






  const points = "200,0 200,100 100,0"


  return (<polygon
    points={points}
    fill="#000000"
  />
  );
}


export default Box;