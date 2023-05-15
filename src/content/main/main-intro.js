// content
import { useEffect, useState } from "react";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";

// const listMedia = require('../../static/data-route-intro.json').data


export default function MainIntroModule () {

  const asset = {}
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState()

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        // setData(listMedia)

      }
      fetchData()
    } else {}
  },[]);


  return (
  <>

    <div className="container">
      
      <WebbDividerMedium />
      <div className="text-start">
        <h2 className="text-color-main">Introducing Carbon Exchange Protocol</h2>
        <h3>India-first Multi-Asset Exchange on Blockchain For Positive Climate Action</h3>
      </div>

      <WebbDividerMedium />
      <p className="text-lead">
        Cross-border money transfers can be challenging due to various factors such as 
        currency exchange rates, transaction fees, processing time, and security concerns. 
        Other issues include the lack of transparency, regulatory requirements, and the 
        complexity of the process. These challenges can affect the speed, cost, and 
        efficiency of cross-border transactions.
      </p>

      <WebbDividerMedium />
    </div>
  

  </>
  );
}