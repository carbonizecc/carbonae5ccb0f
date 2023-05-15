// content
import { useEffect, useState } from "react";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import { NumberFormat } from "../../services/srvc-utilities";

import AssetsList from '../../static/data-assets-market.json'
import { AssetList } from "../../services/srvc-assets-realm";

export default function MainAssetsModule () {

  const asset = {}

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState()

  useEffect( () => {
    if (asset){

      const fetchData = async() => {
        setLoading(true);

        const result = await AssetList({data: {}})
        // const result = AssetsList.data
        console.log (result)

        if (result.data) {
          const datx = Array.from (result.data.list, x => { return{
            ... x, 
            count: {
              total: Math.floor(Math.random()*10000),
              used: Math.floor(Math.random()*10000*Math.random())
            }
          }})  
          setData(datx)
        }

        setLoading(false);
      }
      fetchData()
    } else {}
  },[]);



  return (
  <>

    <WebbDividerMedium />
    <div className="text-start">
      <h2 className="text-color-main">Carbon Credit Pools</h2>

    </div>

    {/* data */}
    <WebbDividerMedium />
    <div className="row row-cols-2 row-cols-md-3 g-3">
    {data && data.map((item, i) => (

      <div className="col" key={i}>
        <div className="back-color-wite rounded-wd">
          <div className="media-standard">
            <img src={item.media.link} className="p-1 rounded-wd" alt={item.meta.name}></img>
            <div className="btn back-color-main rounded-xx text-small">
              <span className="">{item.sale && item.sale.amount || '0'}</span>
              <span className="ms-1">{item.sale && item.sale.ticker || 'USD'}</span>
            </div>
          </div>
        
          <div className="mb-3"></div>
          <div className="mx-3">
            <p className="text-bold text-sm m-0">{item.meta.name}</p>
            <p className="text-small m-0 text-md ">{item.meta.memo}</p>
          </div>
          
          <div className="mb-2"></div>
          <div className="d-flex mx-3 mt-1">
            <div className="text-small">
              <p className="m-0">{`In Stock:`}</p>
            </div>
            <div className="ms-auto text-end">
              {NumberFormat(item.count.total - item.count.used).split('.')[0]}
              {' '}
              ({((1-item.count.used/item.count.total)*100).toFixed(0)}%)
            </div>  
          </div>
          <div className="mx-3">
            <div className="progress" 
              role="progressbar" 
              aria-valuenow="75" 
              aria-valuemin="0" 
              aria-valuemax="100"
              style={{height: '0.45rem'}}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated back-color-success" 
                style={{width:`${(1-item.count.used/item.count.total)*100}%`, height: '0.45rem'}}></div>
            </div>
          </div>
          <div className="d-flex mx-3 mt-1">
            <div className=""><p className="text-small text-color-tone m-0 mb-1">{`Units: MT`}</p></div>
            <div className="ms-auto text-end">{NumberFormat(item.count.total).split('.')[0]}</div>  
          </div>
          <div className="mx-3">
            
          </div>

          <div className="pb-3"></div>

        </div>
      </div>
    ))}
    </div>
    

  </>
  );
}