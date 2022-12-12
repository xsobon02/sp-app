import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Stroke, Style } from 'ol/style';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import Projection from "ol/proj/Projection";

//import { realLinks } from '../data/constants';
import { fakeLinks } from '../data/constants';

export default function MainMap(props) {
  let tenMinHour = 1;
  let arrayValue;
  let calcArrayValue

  const [map, setMap] = useState();
  const mapRef = useRef();
  mapRef.current = map;

  const [play, setPlay] = useState(true);
  const [show, setShow] = useState(true);
  const [sliderValue, setSliderValue] = useState(1);
  const [time, setTime] = useState('03:00');
  const [unit, setUnit] = useState(true);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.setAttribute("width", "492");
  canvas.setAttribute("height", "316");
  ctx.translate(0, 316);
  ctx.scale(1, -1);

  createImg(props.data.csvdata[0], ctx, tenMinHour);
  let myCanvasUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  let start = false;
  let real = false;

  let k = 1;
  let intervalId;


  const styles = {
    'LineString': new Style({
      stroke: new Stroke({
        color: '#3d405b',
        width: 3,
      }),
    }),
  };
  // const styles2 = {
  //   'LineString': new Style({
  //     stroke: new Stroke({
  //       color: 'red',
  //       width: 3,
  //     }),
  //   }),
  // }

  const styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()];
  };

  // const changeFunction = function (feature) {
  //   return styles2[feature.getGeometry().getType()];
  // };

  // const realLinksSource = new VectorSource({
  //   features: new GeoJSON().readFeatures(realLinks,
  //     { featureProjection: 'EPSG:3857' }),
  // });
  const fakeLinksSource = new VectorSource({
    features: new GeoJSON().readFeatures(fakeLinks,
      { featureProjection: 'EPSG:3857' }),
  });

  //Link Layer creation
  const linkLayer = new VectorLayer({
    source: fakeLinksSource,
    style: styleFunction,
    visible: true,
    title: 'CMLs'
  });
  //Image layer creation
  const imageLayer = new ImageLayer({
    opacity: 0.8,
    source: new Static({
      url: myCanvasUrl,
      projection: new Projection({
        units: "pixels",
      }),
      imageExtent: [1582569.9997895716, 6431578.153465249, 1637069.3018336033, 6485927.367851425],
    })
  })

  function createSource(name, url) {
    name = new Static({
      url: url,
      projection: new Projection({
        units: "pixels",
      }),
      imageExtent: [1582569.9997895716, 6431578.153465249, 1637069.3018336033, 6485927.367851425],
    })
    return name;
  }

  function setCanvas(canvas, ctx) {
    canvas.setAttribute("width", "492");
    canvas.setAttribute("height", "316");
    ctx.translate(0, 316);
    ctx.scale(1, -1);
  }

  function createBlankImg(arr, ctx) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        ctx.fillStyle = "transparent"
        ctx.fillRect(j, i, 1, 1);
      }
    }
  }

  function createImg(arr, ctx, number) {
    if (number === 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arrayValue = arr[i][j];
          calcArrayValue = arrayValue * number
          if (calcArrayValue < 0.1) {
            ctx.fillStyle = "transparent";
          }
          else if (calcArrayValue < 0.2) {
            ctx.fillStyle = "#451377";
          }
          else if (calcArrayValue < 0.3) {
            ctx.fillStyle = "#3e13aa";
          }
          else if (calcArrayValue < 0.45) {
            ctx.fillStyle = "#1313f5";
          }
          else if (calcArrayValue < 0.6) {
            ctx.fillStyle = "#1273bf";
          }
          else if (calcArrayValue < 0.75) {
            ctx.fillStyle = "#12a212";
          }
          else if (calcArrayValue < 1) {
            ctx.fillStyle = "#12bb12";
          }
          else if (calcArrayValue < 1.3) {
            ctx.fillStyle = "#41d513";
          }
          else if (calcArrayValue < 1.6) {
            ctx.fillStyle = "#9fd813";
          }
          else if (calcArrayValue < 2) {
            ctx.fillStyle = "#dcd813";
          }
          else if (calcArrayValue < 2.5) {
            ctx.fillStyle = "#f5b112";
          }
          else if (calcArrayValue < 3.3) {
            ctx.fillStyle = "#f58913";
          }
          else if (calcArrayValue < 5) {
            ctx.fillStyle = "#f46112";
          }
          else if (calcArrayValue < 6) {
            ctx.fillStyle = "#f61313";
          }
          else if (calcArrayValue < 8) {
            ctx.fillStyle = "#a31313";
          }
          else if (calcArrayValue > 8) {
            ctx.fillStyle = "#f6f6f6";
          }
          ctx.fillRect(j, i, 1, 1);
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arrayValue = arr[i][j];
          calcArrayValue = arrayValue * number
          if (calcArrayValue < 0.05) {
            ctx.fillStyle = "transparent";
          }
          else if (calcArrayValue < 0.1) {
            ctx.fillStyle = "#451377";
          }
          else if (calcArrayValue < 0.4) {
            ctx.fillStyle = "#3e13aa";
          }
          else if (calcArrayValue < 0.7) {
            ctx.fillStyle = "#1313f5";
          }
          else if (calcArrayValue < 0.9) {
            ctx.fillStyle = "#1273bf";
          }
          else if (calcArrayValue < 1) {
            ctx.fillStyle = "#12a212";
          }
          else if (calcArrayValue < 4) {
            ctx.fillStyle = "#12bb12";
          }
          else if (calcArrayValue < 7) {
            ctx.fillStyle = "#41d513";
          }
          else if (calcArrayValue < 9) {
            ctx.fillStyle = "#9fd813";
          }
          else if (calcArrayValue < 10) {
            ctx.fillStyle = "#dcd813";
          }
          else if (calcArrayValue < 40) {
            ctx.fillStyle = "#f5b112";
          }
          else if (calcArrayValue < 70) {
            ctx.fillStyle = "#f58913";
          }
          else if (calcArrayValue < 90) {
            ctx.fillStyle = "#f46112";
          }
          else if (calcArrayValue < 100) {
            ctx.fillStyle = "#f61313";
          }
          else if (calcArrayValue === 100) {
            ctx.fillStyle = "#a31313";
          }
          else if (calcArrayValue > 100) {
            ctx.fillStyle = "#f6f6f6";
          }
          ctx.fillRect(j, i, 1, 1);
        }
      }
    }
  };

  // Play image slideshow function
  function playImages() {
    intervalId = setInterval(() => {
      if (k === 1) {
        setTime(`03:10`)
      }
      else if (k < 6) {
        setTime(`03:${k}0`)
      } else if (k < 12) {
        setTime(`04:${k - 6}0`)
      } else if (k < 18) {
        setTime(`05:${k - 12}0`)
      } else if (k < 24) {
        setTime(`06:${k - 18}0`)
      } else if (k < 30) {
        setTime(`07:${k - 24}0`)
      } else if (k < 36) {
        setTime(`08:${k - 30}0`)
      } else if (k < 42) {
        setTime(`09:${k - 36}0`)
      } else if (k < 48) {
        setTime(`10:${k - 42}0`)
      } else if (k === 48) {
        setTime(`11:00`)
      }

      const newCanvas = document.createElement('canvas')
      const newCtx = newCanvas.getContext('2d');
      setCanvas(newCanvas, newCtx)

      createImg(props.data.csvdata[k], newCtx, tenMinHour);
      myCanvasUrl = newCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

      imageLayer.setSource(createSource('newSource', myCanvasUrl))
      k++;
      setSliderValue(k)

      if (k === 49) {
        k = 0;
      }
    }, 1800)
  }

  useEffect(() => {
    //Map creation
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        imageLayer,
        linkLayer
      ],
      view: new View({
        center: fromLonLat([14.437800, 50.075539]),
        zoom: 11,
      }),
    });

    // let selected = null;
    // const selectStyle = new Style({
    //   stroke: new Stroke({
    //     color: 'rgb(255, 98, 98)',
    //     width: 3,
    //   }),
    // });

    setMap(initialMap);

    //On link click function
    initialMap.on('click', function (e) {
      initialMap.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
        console.log(feature.get('id'));
        //console.log(layer.values_.title);
      })
    })

    //Style change on hover
    // initialMap.on('pointermove', function (e) {
    //   if (selected !== null) {
    //     selected.setStyle(undefined);

    //     selected = null;
    //   }

    //   initialMap.forEachFeatureAtPixel(e.pixel, function (f) {
    //     selected = f;
    //     f.setStyle(selectStyle);
    //     return true;
    //   });

    //   let hit = this.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    //     return true;
    //   });
    //   if (hit) {
    //     this.getTargetElement().style.cursor = 'pointer';
    //   } else {
    //     this.getTargetElement().style.cursor = '';
    //   }
    // });

    //Switch CMLs
    document.querySelector('#link-selector').addEventListener('click', function (e) {
      //linkLayer.setVisible(!linkLayer.getVisible());
      real ? real = false : real = true
      if (real) {
        linkLayer.setSource(fakeLinksSource);
      } else {
        console.log('placeholder')
        //linkLayer.setSource(realLinksSource);
      }
    })
    //Play images
    document.querySelector('#next-button').addEventListener('click', function (e) {
      start ? start = false : start = true
      if (start) {
        playImages();
      } else {
        clearInterval(intervalId);
      }
    })

    document.querySelector('#map-value-change').addEventListener('click', function (e) {
      tenMinHour === 1 ? tenMinHour = 6 : tenMinHour = 1

      const newCanvas = document.createElement('canvas')
      const newCtx = newCanvas.getContext('2d');
      setCanvas(newCanvas, newCtx)

      createBlankImg(props.data.csvdata[k - 1], newCtx)
      myCanvasUrl = newCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      imageLayer.setSource(createSource('newSource', myCanvasUrl))

      createImg(props.data.csvdata[k - 1], newCtx, tenMinHour);
      myCanvasUrl = newCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      imageLayer.setSource(createSource('newSource', myCanvasUrl))
    })



    // document.querySelector('#color').addEventListener('click', function (e) {
    //   linkLayer.setStyle(changeFunction);
    // })

  }, []);

  function handleShow() {
    show ? setShow(false) : setShow(true);
  }

  function handlePlay() {
    play ? setPlay(false) : setPlay(true);
  }

  function handleUnitClick() {
    unit ? setUnit(false) : setUnit(true);
  }

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }} ref={mapRef} className="map-container" />
      <div id='link-selector-div'>
        <label>Switch to:</label>
        <button id="link-selector" onClick={handleShow}>{show ? `Fake ` : `Real `}CMLs</button>
      </div>
      <button id="next-button" onClick={handlePlay}>{play && <span className="material-symbols-outlined">play_arrow</span>}
        {!play && <span className="material-symbols-outlined">pause</span>}
      </button>
      <input type={'range'} id='timer' min={1} max={49} step={1} value={sliderValue} readOnly></input>
      <div id='datetime'>
        <p id='date'>Date: 01.08.2021</p>
        <p id='time'>Time: {time}</p>
      </div>
      <img src={unit ? 'hodnoty.png' : 'hodnotymmh.png'} className='map-value-image'></img>
      <div id='map-value-change-div'>
        <label>Switch to:</label>
        <button id='map-value-change' onClick={handleUnitClick}>{unit ? 'mm/h' : 'mm/10 min'}</button>
      </div>
    </>
  );
}