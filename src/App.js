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
  const gradient1 = useStore(state => state.gradient1)
  const setGradient1 = useStore(state => state.setGradient1)
  const gradient2 = useStore(state => state.gradient2)
  const setGradient2 = useStore(state => state.setGradient2)
  const switchCircles = useStore(state => state.switchCircles)
  const switchBackground = useStore(state => state.switchBackground)
  const setSwitchBackground = useStore(state => state.setSwitchBackground)
  // const setSwitchCircles = useStore(state => state.setSwitchCircles)
  const switchColors = useStore(state => state.switchColors)
  const setSwitchColors = useStore(state => state.setSwitchColors)
  const colorPalette = useStore(state => state.colorPalette)
  const setColorPalette = useStore(state => state.setColorPalette)

  const downloadArtwork = () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('svg'), 'tiles.png', imageOptions);
  };
    console.log(gradient1);
    console.log(gradient2);

  return (
    <>
    <div className="App">
     <div className="content">
     <h1  className="content__title">Truchet Personaliser</h1>
     <p  className="content__intro">Have you ever wanted to make your own artwork but your artistic skills haven't gotten any better since kindergarten? Than this is your rescue! Make your own customized truchet tile artwork with this fully customizable truchetgenerator. Since it's fully randomized it will also be entirely unique!</p>
     {/* <button onClick={setSwitchCircles}>Toggle artwork</button> */}
     <div className="inputs">
      <div className="inputs__color">
        {switchColors ?
          <Select label="Colorpalette: " value={colorPalette} onValueChange={v => setColorPalette(v)} />
          :
          <Colorpicker label="Tilecolor: " value={color} onValueChange={v => setColor(v)} />
        }
    </div>
    <p className="inputs__color--label">Colorpalette</p>
    <div className="container">
      <label className="switch"><input type="checkbox" onClick={setSwitchColors}/>    <div></div>
      </label>
    </div>
     <Slider label="Number of Rows: " value={size} onValueChange={v => setSize(v)} />
    <div>
    <br></br>
    <p className="inputs__color--label">Background gradient</p>
    <div className="container2">
      <label className="switch2"><input type="checkbox" onClick={setSwitchBackground}/>    <div></div>
      </label>
      </div>
        {switchBackground ?
          <>
          <Colorpicker value={gradient1} onValueChange={v => setGradient1(v)} />
          <Colorpicker value={gradient2} onValueChange={v => setGradient2(v)} />
          </>:
          <></>
          
        }
      </div>
     <button className="button-74 download" onClick={downloadArtwork}><i className="fa fa-download"></i> Download Artwork</button></div>
     </div>
      {switchCircles ?
        <Drawing2 width={800} height={800}/>
        :
        <Drawing width={720} height={720} />
      }
    </div>
    </>
  );
}

export default App;





//  <button className="button-59" onClick={setSwitchCircles}>Toggle artwork</button>




/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.34 323.94"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><path class="cls-1" d="M537.42,313.1A161.17,161.17,0,0,0,698.69,151.84" transform="translate(-537.42 -151.84)"/><path class="cls-1" d="M860.76,314.51A161.17,161.17,0,0,0,699.5,475.77" transform="translate(-537.42 -151.84)"/></svg> */


  //<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324.61 324.61"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><rect class="cls-1" x="1" y="1" width="322.61" height="322.61"/><path d="M860,153.18V474.79H538.35V153.18H860m1-1H537.35V475.79H861V152.18Z" transform="translate(-536.85 -151.68)"/><path class="cls-2" d="M698.49,152.18v.15a160.9,160.9,0,0,1-160.9,160.9h-.24v-161Z" transform="translate(-536.85 -151.68)"/><path class="cls-2" d="M861,314.5V475.79H699.53v-.39a160.9,160.9,0,0,1,160.9-160.9Z" transform="translate(-536.85 -151.68)"/></svg>