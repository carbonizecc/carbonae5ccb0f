// auth - firebase mail link
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { auth } from '../../services/firebase'
// import { sendSignInLinkToEmail } from "firebase/auth";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";
import WebbSpinner from "../webx/webb-spinner";
import WebbModuleInfo from "../webx/webb-module-info";
import FormNeeded from "../webx/form-needed";

import { GetLocalUser } from "../../services/srvc-auth-user";

import AssetsList from '../../static/data-assets-market.json'

export default function AssetsListMarketModule () {

  const navigate = useNavigate();
  const asset = GetLocalUser()
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState()

  useEffect( () => {
    if (asset){

      const fetchData = async() => {
        setLoading(true);

        // const result = await TransfersList({data: {user: asset.mobile}})
        const result = AssetsList.data
        console.log (result)

        if (result)
        setData(result)

        setLoading(false);
      }
      fetchData()
    } else {}
  },[]);



  if (loading) return <></>


  return (
  <>

    {/* info */}
    <div className="">
      <h1 className="text-lead">Carbon Credits Store</h1>
      
    </div>
    <WebbDividerSmall />

    {/* data */}
    <div className="row row-cols-2 row-cols-md-3 g-2">
    {data && data.map((item, i) => (

      <div className="col" key={i}>
        <div className="back-color-wite rounded-wd">
          <div className="media-cube">
            <img src={item.media.link} className="rounded-wd" alt={item.meta.name}></img>
            <div className="btn back-color-main rounded-xx text-small">
              <span className="">{item.sale.amount}</span>
              <span className="ms-1">{item.sale.ticker}</span>
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
              <p className="m-0">{`In Stock: ${((1-item.count.done/item.count.total)*100).toFixed(0)}%`}</p>
            </div>
            <div className="ms-auto text-end">{item.count.total - item.count.done}</div>  
          </div>
          <div className="mx-3">
            <div className="progress" 
              role="progressbar" 
              aria-valuenow="75" 
              aria-valuemin="0" 
              aria-valuemax="100"
              style={{height: '0.5rem'}}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated back-color-success" 
                style={{width:`${(1-item.count.done/item.count.total)*100}%`, height: '0.5rem'}}></div>
            </div>
          </div>
          <div className="d-flex mx-3 mt-1">
            <div className=""><p className="text-small text-color-tone m-0 mb-1">{`Units: MT`}</p></div>
            <div className="ms-auto text-end">{item.count.total}</div>  
          </div>
          <div className="mx-3">
            
          </div>

          <div className="pb-3"></div>

        </div>
      </div>
    ))}
    </div>
    
    

  </>

  )
}