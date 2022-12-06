import { useEffect, useState } from "react";
import MainMap from "./MainMap";

export default function DataMap() {

  const [backendData, setBackendData] = useState([{}]);
  //Backend connect function
  async function getData() {
    const response = await fetch("/api");
    const data = await response.json();
    setBackendData(data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='map-container'>{(typeof backendData.csvdata === 'undefined') ? (
      <p className='loading-paragraph'>Loading...</p>) : (
      <MainMap data={backendData} />
    )
    }</div>
  )
}