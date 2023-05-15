// auth - firebase mail link
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";
import WebbSpinner from "../webx/webb-spinner";
import WebbModuleInfo from "../webx/webb-module-info";
import FormNeeded from "../webx/form-needed";

import { GetLocalUser } from "../../services/srvc-auth-user";

const listactions = require("../../static/data-user-actions.json").data;

export default function UserActionsModule () {

  const navigate = useNavigate();
  const asset = GetLocalUser()
  console.log (asset)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState()

  // console.log(listactions.filter(x => x.user.includes(asset.form)))

  useEffect( () => {
    if (asset){

      const fetchData = async() => {
        setLoading(true);

        const result = listactions.filter(x => x.user.includes(asset.form))
        setData(result)

        setLoading(false);
      }
      fetchData()
    } else {}
  },[]);



  if (loading) return <></>


  return (
  <>
    
    <div className="back-color-wite rounded-wd border p-1">
      <div className="row row-cols-3 row-cols-md-6 g-1">
        {data && data.map((item, i) => (
        
        <div className="col text-center" key={i}>

          <Link 
            to={`/${asset.form}/${item.link}`}       
            style={{pointerEvents:`${ item.actv ? '' : 'none' } `}}
            className={`w-100 h-100 border-none text-center
            text-decoration-none m-0 p-0 ${item.actv ? '' : 'text-color-tone'}`}>

            <div className="p-1 py-2 rounded back-color-wite hitone">              
              <i className={`m-0 p-0 ${item.icon}`}  
                style={{fontSize:"2em",}}>
              </i>
              
              <div className="d-none d-md-block">
                <p className={`m-0 p-0 text-dark text-nowrap`}>
                  <small>{item.name}</small>
                </p>
              </div>
              
              <div className="d-md-none">
                <p className={`m-0 p-0 text-dark text-nowrap`}>
                  <small>{item.name}</small>
                </p>
              </div>

            </div>            
          </Link>

        </div>
        ))}

      </div>
    </div>

  </>

  )
}