import { Route, useLocation } from "react-router-dom";


export const GetEnvironment = async () => {
  
  return (window.location.hostname === "localhost" ? 'test' : "main")

}

// export function ActiveLink (){
//   let { path } = useLocation();
//   if ( path.slice(4).indexOf("/") >-1 ){
//     return (path.slice(4).substring(0,path.slice(1).indexOf("/")))
//   } else { 
//     return (path.slice(4))
//   }
// }

export function ActiveSiteLink (){
  let location = useLocation();
  // console.log (location)
  if ( location.pathname.slice(1).indexOf("/") >-1 ){
    return (location.pathname.slice(1).substring(0,location.pathname.slice(1).indexOf("/")))
  } else { 
    return (location.pathname.slice(1))
  }
}

export function GetUserForm (){
  const location = useLocation();
  return location.pathname.split('/')[1]
}

// export function PageName (){
//   let { path } = useLocation();
//   return path.slice(1).substring(0,1).toUpperCase() + path.slice(1).substring(1);
// }

// export function DateDDMMM (item){
//   const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   return (new Date(item)).toISOString().substring(8,2)+'-'+ month[parseInt((new Date(item)).toISOString().substring(6,2))]
// }

// export function TimeHHMM (item){
//   return (new Date(item)).toISOString().substring(11,5)
// }

export function NumberFormat (number, format){
  var data = Math.round(number*100)/100
	var nmbr = data.toString().split('.')[1] 
  ? data.toString().split('.')[1].length === 2
  	? data.toString()
    : data.toString()+'0'
  : data.toString()+'.00'
  
	nmbr = nmbr.toString().split('.')

  if (nmbr[0].length <= 3)   return nmbr.join('.')
  else {
  	var nmbx = nmbr[0].substr(0,nmbr[0].length-3) 
  	nmbx = format === "ww" 
    ? nmbx.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	  : nmbx.replace(/\B(?=(\d{2})+(?!\d))/g, ",")

    nmbr[0] = nmbx + ',' + nmbr[0].substr(nmbr[0].length-3,3)
    return nmbr.join('.')
  }
}

export function numbex (number, form){

  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});