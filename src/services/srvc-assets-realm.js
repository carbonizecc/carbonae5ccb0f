// init
import axios from "axios";
const base = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/carbonize-assets-obhab/endpoint'

// -----------------

export const AssetCreate = async (item) => {
  
  const basx = base + '/assets/create';
  const head = { 
    "Content-Type": "application/json",
    "Authorization": process.env.REACT_APP_WEBB_SITE_SCRT
  }
  const datx = {data: item.data, srvc: process.env.REACT_APP_WEBB_SITE_NMBR}

  var result;
  try {
    result = await axios.post(basx, datx, {headers: head});
    console.log (result)
    return ([200, 201].includes(result.status)) ? result.data : {data: false}
  } catch (error) {
    console.log (error);
    return {data: false}
  }
  
}

export const AssetDetails = async (item) => {
  
  const basx = base + '/assets/details';
  const head = { 
    "Content-Type": "application/json",
    "Authorization": process.env.REACT_APP_WEBB_SITE_SCRT
  }
  const datx = {data: item.data, srvc: process.env.REACT_APP_WEBB_SITE_NMBR}

  var result;
  try {
    result = await axios.post(basx, datx, {headers: head});
    console.log (result)
    return ([200, 201].includes(result.status)) ? result.data : {data: false}
  } catch (error) {
    console.log (error);
    return {data: false}
  }
  
}


export const AssetListTeam = async (item) => {
  
  const basx = base + '/assets/list/team';
  const head = { 
    "Content-Type": "application/json",
    "Authorization": process.env.REACT_APP_WEBB_SITE_SCRT
  }
  const datx = {data: item.data, srvc: process.env.REACT_APP_WEBB_SITE_NMBR}

  var result;
  try {
    result = await axios.post(basx, datx, {headers: head});
    console.log (result)
    return ([200, 201].includes(result.status)) ? result.data : {data: false}
  } catch (error) {
    console.log (error);
    return {data: false}
  }
  
}


export const AssetList = async (item) => {
  
  const basx = base + '/assets/list';
  const head = { 
    "Content-Type": "application/json",
    "Authorization": process.env.REACT_APP_WEBB_SITE_SCRT
  }
  const datx = {data: item.data, srvc: process.env.REACT_APP_WEBB_SITE_NMBR}

  var result;
  try {
    result = await axios.post(basx, datx, {headers: head});
    console.log (result)
    return ([200, 201].includes(result.status)) ? result.data : {data: false}
  } catch (error) {
    console.log (error);
    return {data: false}
  }
  
}

