import React from 'react'
import ContentLoader from 'react-content-loader'

const PreloaderProducts = (props) => (
  <div className='pizza-block'>
  <ContentLoader 
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="538" y="535" rx="3" ry="3" width="88" height="6" /> 
    <circle cx="130" cy="130" r="130" /> 
    <rect x="2" y="273" rx="6" ry="6" width="258" height="33" /> 
    <rect x="3" y="325" rx="6" ry="6" width="257" height="78" /> 
    <rect x="6" y="423" rx="0" ry="0" width="97" height="43" /> 
    <rect x="123" y="417" rx="20" ry="20" width="136" height="41" />
  </ContentLoader>
  </div>
)

export default PreloaderProducts;



