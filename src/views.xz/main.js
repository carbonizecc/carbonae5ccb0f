// main
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ContentFormat from "../content/webz/content-format-xz";
import WebbHeader from "../content/webz/webb-header-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import WebbIcon from "../content/webx/webb-icon";

import MainIntroModule from "../content/main/main-intro";
import MainBenefitsModule from "../content/main/main-benefits";
import MainAssetsModule from "../content/main/main-assets";


export default function Main () {
  
  const metadata = {
    name: 'Welcome',
    banner: {link: 'https://img.freepik.com/free-photo/dreamlike-surrealistic-landscape-wallpaper-purple-tones_23-2150293351.jpg?w=900'}
  }

  // https://www.freepik.com/free-photo/dreamlike-surrealistic-landscape-wallpaper-purple-tones_40572368.htm
  
  const navigate = useNavigate()

  return(

  <>
    <Helmet>
      <title>{metadata.name}{' • '}{process.env.REACT_APP_WEBB_SITE_NAME}{' • '}{process.env.REACT_APP_WEBB_SITE_LINE}</title>
      <link rel="canonical" href={process.env.REACT_APP_WEBB_SITE_LINK} />
    </Helmet>

    <ContentFormat 
      
      name = {metadata.name}
      header = {{ size: 'medium', visible: true, data: 
      <>
        <WebbHeader data={{home: '/', name: metadata.name, link: '/'}}/>
      </>
      }}

      media = {{ size: 'xtra', link: metadata.banner.link, data: 
      <>
        <div className="media-banner d-none">
          <img src={metadata.banner.link} className="" alt={''}></img>
        </div>
        <WebbDividerMedium />
        <WebbDividerMedium />
        
        <div className="text-center">
          <span className="back-color-main text-color-wite p-3 px-4 text-lead">
            The Blockchain Carbon Exchange
          </span>
          <WebbDividerMedium />
          <h1 className="text-color-wite text-center">Save The Earth</h1>
          <h1 className="text-color-wite text-center">One Carbon Credit at a Time</h1>

          

        </div>

        <WebbDividerMedium />
        <WebbDividerMedium />
        <div className="text-center">
          <span className="back-color-wite p-3 px-5 rounded-wd cursor hirich"
            onClick={() => navigate('/auth')}
          >Get Started</span>
        </div>

        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />

      </>
      }}

      content = {{ size: 'xtra', data: 
      <>

        <div className="container" 
          // style={{
          //   backgroundImage:`url(${metadata.banner.link})`, 
          //   backgroundRepeat:'no-repeat', 
          //   backgroundSize:'cover',
          //   backgroundPosition: 'center center',
          //   height:'100vh'
          // }}
        >
        
        <WebbDividerMedium />
        <MainIntroModule />

        <WebbDividerMedium /> 
        <MainAssetsModule />

        <WebbDividerMedium /> 
        <MainBenefitsModule />
        
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium /> 
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />

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