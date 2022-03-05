import './App.css';
import Colorpicker from './components/Colorpicker';
import Slider from './components/Slider';
import Drawing from './components/Drawing';
import Drawing2 from './components/Drawing2';
import Select from './components/Select';
import { useStore } from "./store";

const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white',
}

/* ----------

BUITEN APP PLAATSEN WAT NIET MEER VERANDERT

----------- */

function App() {
  const size = useStore(state => state.size)
  const setSize = useStore(state => state.setSize)
  const color = useStore(state => state.color)
  const setColor = useStore(state => state.setColor)
  const switchCircles = useStore(state => state.switchCircles)
  const setSwitchCircles = useStore(state => state.setSwitchCircles)
  const switchColors = useStore(state => state.switchColors)
  const setSwitchColors = useStore(state => state.setSwitchColors)
  const colorPalette = useStore(state => state.colorPalette)
  const setColorPalette = useStore(state => state.setColorPalette)

  const downloadArtwork = () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('svg'), 'tiles.png', imageOptions);
  };

  return (
    <>
    <div className="App">
      {/* <button onClick={handleAddBox}>Add</button> */}
     <br></br>
     <button onClick={setSwitchCircles}>Toggle artwork</button>
     <br></br>
     <br></br>
     <button onClick={setSwitchColors}>Toggle colors</button>
      {switchColors ?
        <Select label="Colorpalette: " value={colorPalette} onValueChange={v => setColorPalette(v)} />
        :
        <Colorpicker label="Color: " value={color} onValueChange={v => setColor(v)} />
      }
     <br></br>
     <br></br>
     <Slider label="Number of Tiles: " value={size} onValueChange={v => setSize(v)} />
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      {switchCircles ?
        <Drawing2 width={800} height={800}/>
        :
        <Drawing width={600} height={600} />
      }
      <br />
      <button onClick={downloadArtwork}>Download Image</button>
    </div>
    </>
  );
}

export default App;













  // const traingle1 = (x, y, w, h) => {
  //  console.log(x, y, x + w, y, x, y + h);
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


/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.34 323.94"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><path class="cls-1" d="M537.42,313.1A161.17,161.17,0,0,0,698.69,151.84" transform="translate(-537.42 -151.84)"/><path class="cls-1" d="M860.76,314.51A161.17,161.17,0,0,0,699.5,475.77" transform="translate(-537.42 -151.84)"/></svg> */


  //<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324.61 324.61"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><rect class="cls-1" x="1" y="1" width="322.61" height="322.61"/><path d="M860,153.18V474.79H538.35V153.18H860m1-1H537.35V475.79H861V152.18Z" transform="translate(-536.85 -151.68)"/><path class="cls-2" d="M698.49,152.18v.15a160.9,160.9,0,0,1-160.9,160.9h-.24v-161Z" transform="translate(-536.85 -151.68)"/><path class="cls-2" d="M861,314.5V475.79H699.53v-.39a160.9,160.9,0,0,1,160.9-160.9Z" transform="translate(-536.85 -151.68)"/></svg>