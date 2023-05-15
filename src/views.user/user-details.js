// main
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import ContentFormat from "../content/webz/content-format-xz";
import WebbHeaderNavs from "../content/webz/webb-header-navs-xw";
import WebbFooterMobile from "../content/webz/webb-footer-mobile";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import UserAccountInfoModule from "../content/home/user-acount-info";
import UserAccountBalanceModule from "../content/home/user-acount-balance";
import UserAccountCodeModule from "../content/home/user-acount-code";
import UserAccountXModule from "../content/home/user-acount-x";


export default function UserDetails () {
  
  const metadata = {
    name: 'Account Details',
    banner: {link: 'https://img.freepik.com/premium-vector/futuristic-vector-hexagon-wave-dark-cyberspace-abstract-wave-with-dots-line-white-moving-particles-background_744733-97.jpg?w=900'}
  }

  return(

  <>
    <Helmet>
      <title>{metadata.name}{' • '}{process.env.REACT_APP_WEBB_SITE_NAME}{' • '}{process.env.REACT_APP_WEBB_SITE_LINE}</title>
      <link rel="canonical" href={process.env.REACT_APP_WEBB_SITE_LINK} />
    </Helmet>

    <ContentFormat 
      
      name = {metadata.name}
      header = {{ size: 'mini', visible: true, data: 
      <> 
        <div className="text-center back-color-lite">
          <WebbDividerSmall />
          <WebbHeaderNavs /> 
          <WebbDividerSmall />
        </div>
      </> }}

      media = {{ size: 'xtra', data: <></> }}

      content = {{ size: 'mini', data: 
      <>
        <WebbDividerMedium />
        <UserAccountInfoModule />

        <WebbDividerSmall />
        <UserAccountBalanceModule />
        
        <WebbDividerSmall />
        <UserAccountCodeModule />

        <WebbDividerMedium />
        <UserAccountXModule />
        
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />
        <WebbDividerMedium />
      </>
      }}
    
      footer = {{ size: 'medium', data: 
      <> 
        <div className="text-center back-color-lite fixed-bottom d-block d-md-none">
          <WebbDividerSmall />
          <WebbFooterMobile /> 
        </div>
      </> }}
    
    ></ContentFormat>


  </>
  )
}