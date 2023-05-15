// firebase file upload
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

import WebbStatusBar from "../content/webx/webb-statusbar";
// import FormNeeded from "../content/webx/form-needed";

const AWS = require('aws-sdk')
AWS.config.region = 'ap-east-1';

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',     
  accessKeyId: 'AKIA3JIKUWEH66RYJ7NN',
  secretAccessKey: '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',
})

const basemedia = require('../media/filesave.jpg')

export default function FileSaveCWeb (props) {

  const [link, setLink] = useState(basemedia);
  const [file, setFile] = useState();
  const [mime, setMime] = useState();

  const [stat, setStatus] = useState('Click above to Select / Replace Media...');
  const [done, setDone] = useState(0);

  let inputFile = useRef(null);

  const handleFile = async (e) => {
    const { files } = e.target;
    if (files && files.length) {
  
      setDone(0)
      
      handleLink(files[0]);      
      handleMime(files[0]);
      handleSave(files[0]);

    }
  };

  const handleLink = async(file) => {
    // set local file link
    setLink(URL.createObjectURL(file));
  }

  const handleMime = async(item) => {
    // console.log(item.type)
    // set local file link
    setMime(item.type);
  }

  const handleSave = async(item) => {

    setStatus('Please Wait... ')
    const filename = uuidv4().split('-').join('') + "." + item.type.split('/')[1]
    console.log (filename, item.type, item.size)
    setFile(filename)
    
    const params = {
      Bucket: `${process.env.REACT_APP_WEBB_STOR_CWEB}`,
      Key: filename,
      Body: item,
      ContentType: item.type,
      ACL: 'public-read'
    }

    const result = await s3.upload(params)
    .on('httpUploadProgress', event => {
      uploadProgress(event, 'aws');
    })
    .send((err, data) => {
      if (err) console.log(err)
      else {
        console.log('link: ', data.Location)
        setLink(data.Location)
        props.media({link: data.Location, mime: item.type, size: item.size})
      }
    })
    console.log (result)

    const sizex = await s3.headObject({ 
      Bucket: `${process.env.REACT_APP_WEBB_STOR_CWEB}`,
      Key: filename
    }).promise()
    console.log (sizex)
  }

  const uploadProgress = (event, server) => {
    
    console.log('event', server)

    let status = Math.round((event.loaded / event.total) * 100)
    if (server === 'aws') {
      setDone(status)
      setStatus(`Status: ${status}% Done`)

    } else if (server === 'ipfs') {
      setDone(status)
      setStatus(`Status: ${status}% Done`)
    }
  }


  const onButtonClick = () => {
    inputFile.current.click();
    
  };

  return (
  <>

    <div className={`border rounded-wd ${mime && mime.split('/')[0] === 'image' || !mime ? '' : 'd-none'}`}>
      <div className={`${props.size} rounded-wd border border-light cursor`} 
        onClick={() => onButtonClick()}>
        <img className="ref" src={link} alt="file" />
      </div>
    </div>

    <div className={`rounded-wd ${mime && mime.split('/')[0] === 'video' ? '' : 'd-none'}`}>
      <div className={`cursor`}
       onClick={() => onButtonClick()}>
        <video src={link} autoPlay loop style={{width:'100%'}} 
          className='rounded-wd border border-light'>  
        </video>
      </div>
    </div>

    <div className="m-2 mb-3">
      <p className="text-small text-color-none m-0 mb-1">
        <span><i className={`bx bxs-circle small text-color-${ done == 100 ? 'success' : 'danger'}`}></i></span>
        <span className="ms-1">{stat}</span>
      </p>
      <WebbStatusBar stat={done}/>
    </div>

    <div className="mb-3">
      <input 
        type="file" accept="image/png, image/jpg, image/jpeg, image/webp, image/gif" id="file"
        ref={inputFile}
        onChange= {handleFile} 
        style={{display: "none"}}
      ></input>
    </div>

  </>
  )
}
