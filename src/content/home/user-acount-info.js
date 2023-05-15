// auth - firebase mail link
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";
import WebbSpinner from "../webx/webb-spinner";
import WebbModuleInfo from "../webx/webb-module-info";
import FormNeeded from "../webx/form-needed";

import { GetLocalUser } from "../../services/srvc-auth-user";



export default function UserAccountInfoModule () {

  const navigate = useNavigate();
  const asset = GetLocalUser()
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState()



  // if (loading) return <WebbSpinner/>


  return (
  <>

    <div className="back-color-wite rounded-wd p-3 border">
      
      <p className="text-small text-color-tone m-0">User Account Info</p>
      <p className="text-primary text-bold text-normal">{asset.name}</p>
      <p className="m-0">{asset.mobile}</p>
      <p className="m-0">{asset.mail}</p>

      <span className="text-small m-0 cursor back-color-lite rounded-wd p-2 px-3 d-none"
        onClick={() => navigate('/auth/x')}
      >Logout</span>
    </div>
    
    

  </>

  )
}