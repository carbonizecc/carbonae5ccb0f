import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

// views - main
import Main from "../views.xz/main";

// // views - home
import HomeUser from "../views.home/home-user";


// views - assets
import Assets from "../views.assets/assets";
import AssetsCreate from "../views.assets/assets-create";


// // views - transfers
import TransfersList from "../views.transfers/transfers-list";

// views - user
import UserDetails from "../views.user/user-details";


// // views - auth
import AuthMail from "../views.auth/auth-mail";
// import AuthMailCheckFirebase from "../views-auth/auth-mail-check";
import AuthNext from "../views.auth/auth-next";
import AuthSessionX from "../views.auth/auth-session-x";

import UserOnboard from "../views.auth/user-onboard";
// import BusinessOnboard from "../views-onboard/business-onboard";


const routes = [

  { route:'/', content: <Main />, auth:false },

  // user
  { route:'/user/home', content: <HomeUser />, auth:false },

  // assets
  { route:'/user/assets', content: <Assets />, auth:false },
  { route:'/user/assets/create', content: <AssetsCreate />, auth:false },
  { route:'/user/assets/view/:id', content: <AssetsCreate />, auth:false },

  
  // transfers
  { route:'/user/transfers', content: <TransfersList />, auth:false },


  // user
  { route:'/user/account', content: <UserDetails />, auth:false },

  // auth
  { route:'/auth', content: <AuthMail />, auth: false },
  // { route:'/auth/check', content: <AuthMailCheckFirebase />, auth: false },
  { route:'/auth/next', content: <AuthNext />, auth: true },
  { route:'/auth/x', content: <AuthSessionX />, auth: true },


  { route:'/user/onboard', content: <UserOnboard />, auth: false },
  // { route:'/business/onboard', content: <BusinessOnboard />, auth: true },

]


export default function RouteX() {

  const { user } = useAuth();
  // console.log (user)

  return (
    <Routes>
      {routes.map ((item,i)=>(item.auth
        ? <Route key={i} path={item.route} element={!user ? <Navigate to='/' replace /> : item.content} />
        : <Route key={i} path={item.route} element={item.content} />
      ))}
    </Routes>
  );
}