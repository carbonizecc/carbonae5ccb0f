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

// import { AccountDetails } from "../../services/srvc-accounts-realm";

export default function UserAccountBalanceModule () {

  const navigate = useNavigate();
  const asset = GetLocalUser()
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({balance: {number: 0}})

  useEffect( () => {
    if (asset){

      const fetchData = async() => {
        setLoading(true);

        // const result = await AccountDetails({data: {user: asset.mobile}})
        // console.log (result)

        // if (result.data)
        // setData(result.data)

        setLoading(false);
      }
      fetchData()
    } else {}
  },[]);



  // if (loading) return <WebbSpinner/>


  return (
  <>

    <div className="back-color-wite rounded-wd p-3 border">
      <div className="d-flex">
        <div className="">
          <p className="text-small text-color-tone m-0">Balance</p>
          <p className="text-lead m-0">{parseInt(data && parseInt(data.balance.number/1000000)).toFixed(6)}</p>
        </div>
        <div className=""></div>
      </div>

    </div>
    
    

  </>

  )
}