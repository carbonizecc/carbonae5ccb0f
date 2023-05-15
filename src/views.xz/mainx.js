// main
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import ContentFormat from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import WebbIcon from "../content/webx/webb-icon";

export default function Main () {
  
  const metadata = {
    name: 'Welcome',
    banner: {link: 'https://img.freepik.com/free-photo/dreamlike-surrealistic-landscape-wallpaper-purple-tones_23-2150293351.jpg?w=900'}
  }

  // https://www.freepik.com/free-photo/dreamlike-surrealistic-landscape-wallpaper-purple-tones_40572368.htm
  
  return(

  <>
    <Helmet>
      <title>{metadata.name}{' • '}{process.env.REACT_APP_WEBB_SITE_NAME}{' • '}{process.env.REACT_APP_WEBB_SITE_LINE}</title>
      <link rel="canonical" href={process.env.REACT_APP_WEBB_SITE_LINK} />
    </Helmet>

    <ContentFormat 
      
      name = {metadata.name}

      header = {{ size: 'medium', data: 
      <>
        <div className="">
          
        </div>
      </>
      }}

      media = {{ size: 'xtra', data: 
      <>
        <div className="">
         
        </div>
      </>
      }}

      content = {{ size: 'xtra', data: 
      <>

        <div className="" style={{
            backgroundImage:`url(${metadata.banner.link})`, 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover',
            backgroundPosition: 'center center',
            height:'100vh'
          }}
        >
        
        <WebbDividerMedium />
        <WebbDividerMedium /> 
        <div className="container">
          <div className="row">
            <div className="col d-none d-lg-block"></div>
            <div className="col">
              <div className="back-color-wite rounded-wd text-center" style={{minHeight:'60vh'}}>

                <WebbDividerMedium/>
                <WebbIcon data={{color: 'text-color-main', size: 'text-icon-wd'}}/>
                
                <WebbDividerMedium/>
                <h2>{process.env.REACT_APP_WEBB_SITE_NAME}</h2>
                <p className="text-normal">{process.env.REACT_APP_WEBB_SITE_LINE}</p>

                <WebbDividerMedium/>
                <WebbDividerMedium/>
                <div className="mx-3">
                  <Link to ={`/auth`}>
                    <div className="p-3 rounded-xx back-color-next text-color-wite hirich">Account Login</div>
                  </Link>
                </div>

                <WebbDividerSmall/>
                <div className="mx-3 d-none">
                  
                    <div className="p-3 rounded-wd back-color-next text-color-wite hirich">Connect Metamask</div>
                  
                </div>

                <WebbDividerMedium />
                <WebbDividerMedium /> 
                <a href={process.env.REACT_APP_WEBB_SITE_LINK} target={'_blank'} rel="noopener" >Main Website</a>
                <WebbDividerMedium /> 

              </div>
              

            </div>
            <div className="col d-none d-lg-block"></div>
          </div>

        </div>

        </div>

      </>
      }}
    
      footer = {{ size: 'medium', data: 
      <>
        <div className="">
        
        </div>
      </>
      }}
    
    
    ></ContentFormat>


  </>
  )
}