// content
import { useEffect, useState } from "react";

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";

// const listMedia = require('../../static/data-route-intro.json').data

const list = [
  {name: 'Transparency', memo: 'By using blockchain technology, carbon credit exchange platforms ensure complete transparency in the carbon trading process. Every transaction on the blockchain is recorded in a decentralized immutable ledger. This eliminates the risk of fraud and increases trust in the system.'},
  {name: 'Efficiency', memo: 'The use of blockchain technology in carbon credit exchange can significantly increase the efficiency of the process. Transactions can be processed in real-time, which reduces the time it takes for credits to be verified and traded. This can save time and resources for all parties involved.'},
  {name: 'Reduced Costs', memo: 'Blockchain-based carbon credit exchange platforms can eliminate the need for intermediaries, such as brokers or clearinghouses. This reduces the transaction costs associated with carbon trading and can make it more accessible for smaller businesses.'},
  {name: 'Increased Accessibility', memo: 'A blockchain-based carbon credit exchange can be accessed from anywhere in the world, as long as there is an internet connection. This can make it easier for businesses in remote areas to participate in carbon trading and reduce their carbon footprint.'},
  {name: 'Environmental Benefits', memo: 'By facilitating carbon trading, blockchain-based carbon credit exchange platforms can help to reduce greenhouse gas emissions. Companies that cannot meet their emissions targets can purchase carbon credits from other companies that have exceeded their targets.'},
  {name: 'Standardization', memo: 'The use of blockchain technology in carbon credit exchange can help to standardize the process. This can make it easier to understand and comply with the regulations surrounding carbon trading. It also facilitates international trading and increase the impact of carbon trading on reducing emissions.'}
]


export default function MainBenefitsModule () {

  const asset = {}
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState()

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        setData(list)

      }
      fetchData()
    } else {}
  },[]);


  return (
  <>

    <div className="container">
      
      <WebbDividerMedium />
      <div className="text-start">
        <h2 className="text-color-main">Carbon Credits and Blockchain</h2>
        <p className="text-lead">CarbonCredits Exchange on blockchain has the potential to create a more transparent, efficient, and sustainable market for carbon credits, which can benefit both the environment and the economy.</p>
      </div>

      <WebbDividerMedium />
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {data && data.map((item, i) => (
          <div className="h-100 mb-3" key={i}>
            <h3 className="text-lead text-bold text-color-next m-0 mb-2">{item.name}</h3>
            <p className="text-normal m-0">{item.memo}</p>
          </div>
          
        ))}

        </div>          

      <WebbDividerMedium />
      <WebbDividerMedium />
    </div>
  

  </>
  );
}