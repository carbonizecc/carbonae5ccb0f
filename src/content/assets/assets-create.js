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

import FileSaveMD from "../../services/srvc-filesave-cweb-md";


const assetform = [
  {code: 'cox', name: 'wind', icon: 'bx bx-wind'}, 
  {code: 'cox', name: 'solar', icon: 'bx bx-sun'}, 
]

export default function AssetsCreateModule () {

  const navigate = useNavigate();
  const asset = GetLocalUser()
  
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState(false);
  const [memo, setMemo] = useState('');

  const [media, setMedia] = useState()
  const [data, setData] = useState({
    name: '',
    memo: '',
    form: 'solar',
    count: '',
    rate: '',
    chain: '416012'
  })

  useEffect( () => {
    if (asset){

      const fetchData = async() => {
        setLoading(true);

        // const result = await AccountDetails({data: {user: asset.mobile}})
        // console.log (result)

        // if (result.data)
        // setBalance(result.data)

        setLoading(false);
      }
      fetchData()
    } else {}
  },[]);

  // useEffect for form validation
  useEffect( () => {
    setForm(false);


  },[]);


  const handleSubmit = async () => {

    setLoading(true);
    setSubmit(true);

    setLoading(false)
    
  }

  const handleMediaBanner = async(filedata) => {
    console.log (filedata);
    setMedia(filedata);
  }

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }



  // if (loading) return <></>


  return (
  <>
    {/* info */}
    <WebbModuleInfo data = {{text: 'Tokenize and Create Asset'}} />
    <WebbDividerSmall/>

    {/* data */}
    <div className="back-color-wite rounded-wd p-3 border">

      <div className="row ">
        <div className="col-md-6">
          <p className="">Asset Artwork</p>
          <p className="text-small mb-3">Media Dimensions 600 x 600 px <FormNeeded/></p>
          <FileSaveMD size='media-cube' media={handleMediaBanner} />
          

          <WebbDividerMedium/>
        </div>

        <div className="col-md-6">
          <p className="">Asset Tokenization Data</p>

          <div className="mb-3">
          <p className="text-small mb-3">Asset Form <FormNeeded/></p>

          <div className="row row-cols-4 g-1">
          {assetform && assetform.map((item, i) => (
            <div className="col text-center" key={i}>
              <div className={`p-2 rounded-wd hitone cursor ${data.form === item.name ? 'back-color-rich' : 'back-color-lite'}`}
                onClick={() => handleChange('form', item.name)}
              >
                <i className={`m-0 p-0 mt-1 ${item.icon}`}  style={{fontSize:"2em",}}></i>
                <p className="text-mini m-0 text-uppercase">{item.name}</p>
              </div>
            </div>
          ))}
          </div>

          </div>
          
          <WebbDividerSmall />

          <div className="mb-3">  
            <label className="form-label small">Registry ID <FormNeeded/></label>
            <input type="text" className="form-control height-md  "
              style={{fontSize:'0.9rem', height:'2.7rem'}}
              value={data.count}
              onChange={({ target }) => {handleChange("count", target.value); }}
              disabled={loading || submit}
              placeholder="123.456.099">
            </input>
          </div>

          <div className="mb-3">  
            <label className="form-label small">Units (Count) <FormNeeded/></label>
            <input type="text" className="form-control height-md  "
              style={{fontSize:'0.9rem', height:'2.7rem'}}
              value={data.count}
              onChange={({ target }) => {handleChange("count", target.value); }}
              disabled={loading || submit}
              placeholder="123">
            </input>
          </div>

          <div className="mb-3">  
            <label className="form-label small">Rate (USD/Unit) <FormNeeded/></label>
            <input type="text" className="form-control height-md  "
              style={{fontSize:'0.9rem', height:'2.7rem'}}
              value={data.rate}
              onChange={({ target }) => {handleChange("rate", target.value); }}
              disabled={loading || submit}
              placeholder="123">
            </input>
          </div>

          <WebbDividerMedium/>
        </div>

      </div>

    </div>

    {/* action */}
    <WebbDividerMedium />
    <div className={!loading && submit && done ? '' : 'd-none'}>
      <p>{memo}</p>
      <p className="cursor text-color-blue d-none"
        onClick={() => window.location.reload()}>Make Another Transfer</p>
    </div>    


    <div className={loading && submit && !done ? '' : 'd-none'}>
      Please Wait...
    </div>
    
    <div className={loading && submit || done ? 'd-none' : ''}>
      <div className="d-flex justify-content-between">

        <button className={`btn btn-light border back-color-wite rounded-wd button text-small`}
          type="button"
          onClick={()=> { navigate(`/${asset.mode}/home`)}}
        >{loading ? 'Please Wait...' : 'Cancel'}</button>

        <button className={`btn btn-info border-none back-color-main text-color-wite rounded-wd text-small`}
          disabled={!form || loading || submit}
          type="button"
          onClick={()=> { handleSubmit()}}
        >{loading ? 'Please Wait...' : 'Continue'}</button>

      </div>
    </div>

  </>

  )
}