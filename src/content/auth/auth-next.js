import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbModuleInfo from "../webx/webb-module-info";
import WebbLoader from "../webx/webb-loader";
import WebbSpinner from "../webx/webb-spinner";

import NextIntro from "../webx/next-intro";
import NextAccounts from "../webx/next-accounts";
import NextDivider from "../webx/next-divider";
import NextUser from "../webx/next-user";
import NextBusiness from "../webx/next-business";
import NextLogout from "../webx/next-logout";


import { UserAccountList } from "../../services/srvc-user-realm";


import { GetAuthUser, SetLocalUser, SetLocalBusiness } from '../../services/srvc-auth-user';
import { SetNewUser, SetNewBusiness } from '../../services/srvc-auth-user';


export default function AuthNextModule () {

  const asset = GetAuthUser();
  // console.log(asset) // asset.user = authenticated email

  const [onboard, setOnboard] = useState(false);
  const [user, setUser] = useState();
  const [loading,setLoading] = useState(true);

  const navigate = useNavigate()

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        setLoading(true);

        var result = {data: {user: '******'}}
        // user roles
        var user = []
        if (result.data) {
          setOnboard (true);
          user = await UserAccountList({ data: { user: asset.user } })
          console.log (user)
        } else {
          setOnboard (false);
        }
        
        setUser(user.data.list)
        setLoading(false);

      }
      fetchData()
    } else {}
  },[]);


  const newUser = () => {
    SetNewUser({user:''})
    if (user) {
      SetNewUser({user:user[0].item})
      console.log(user[0].item)
    }
    navigate(`/user/onboard`)
  }

  const newBusiness = () => {
    SetLocalUser(user[0]);
    SetNewBusiness({user: ''})
    navigate(`/team/onboard`)
  }

  const onboardUser = (usxx) => {

    if (usxx.form === 'user'){
      SetNewUser({user:usxx.item});
      console.log(usxx.item);
    }

    if (usxx.form === 'team'){
      SetLocalUser(user[0]);
      SetNewBusiness({user: usxx.item});
      console.log(usxx.item);
    }
    
    const base = usxx.form === 'user' ? `onboard` : `business`
    
    if (!usxx.onbd.obnm)  navigate(`/${base}/name`)
    else {
      if (!usxx.onbd.obcr) navigate(`/${base}/docs`)
      else {
        if (!usxx.onbd.obdc) navigate(`/${base}/docs`)
        else {
          if (!usxx.onbd.obcm) navigate(`/${base}/contact`)
          else {
            if (!usxx.onbd.oblc) navigate(`/${base}/location`)
            else {
              if (!usxx.onbd.obtr) navigate(`/${base}/terms`)
            }
          }
        }
      }
    }

  }

  const nextuseraction = (usxx) => {
    if (usxx.active) {
      usxx.form === 'user' 
        ? SetLocalUser (usxx)
        : SetLocalBusiness (usxx)
    }
    else onboardUser (usxx)

    if (usxx.form === 'user') navigate (`/${usxx.form}/home`) 
    if (usxx.form === 'team') navigate (`/${usxx.form}/home`) 

  }

  if (loading) return <WebbSpinner />
  
  // user does not exist or user was added contact or refer
  if (!(user && user[0].self)) {
    return (
      <>
        
        <NextIntro stat={'new'} />
        <WebbDividerSmall />
        <div className="" onClick={() => { newUser(); }}>
          <NextUser/>
        </div>

        {/* create a new user here and then onboard */}
        <WebbDividerSmall />
        {/* <NextDivider /> */}
        <NextLogout />

      </>
    )
  }

  // // user has incomplete onboarding steps
  // if (!(user && user[0].onbx)) {
  //   return (
  //     <>
  //       <WebbDividerSmall />
  //       <NextIntro stat={'incomplete'} />
  //       <WebbDividerMedium />
  //       <div className="text-center">
  //         <button onClick={async ()=> { onboardUser(user[0]) }} 
  //           className="btn btn-primary back-color-next border-none rounded-pill px-3">
  //           <small>Update Account</small>
  //         </button>
  //       </div>
  //       <WebbDividerSmall />
  //       <NextDivider />
  //       <NextLogout />
  //     </>
  //   )
  // }

  // if (!(user && user[0].actv)) {
  //   return (
  //     <>
  //       <WebbDividerSmall />
  //       <NextIntro stat={'review'} />
  //       <WebbDividerSmall />
  //       <NextDivider />
  //       <NextLogout />
  //     </>
  //   )
  // }


  // if ((user && user[0].hold)) {
  //   return (
  //     <>
  //       <NextIntro stat={'hold'} />
  //       <WebbDividerSmall />
  //       <NextDivider />
  //       <NextLogout />
  //     </>
  //   )
  // }
  
  
  return (
    <>
    {/* info  */}
    <WebbModuleInfo data={{text: 'Select Account to continue'}} />
    <WebbDividerSmall />

    {/* personal */}
    <NextAccounts 
      data={user.filter(item => item.form==='user')}
      form={'Personal'}
      user={nextuseraction}
    />
    
    <WebbDividerMedium />
    {/* business */}
    <NextAccounts
      data={user.filter(item => item.form==='team')} 
      form={'Team'}
      user={nextuseraction}
    />

    {/* actions */}
    {/* <WebbDividerSmall />
    <NextDivider />
    <div className="" onClick={() => { newBusiness(); }}>
      <NextBusiness/>
    </div> */}

    <WebbDividerSmall />
    <NextLogout />
    
  </>
  )
  
}