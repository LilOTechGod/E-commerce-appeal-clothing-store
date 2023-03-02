import React from 'react'
import MetaTags from 'react-meta-tags'


const launchPage = () => {
  return (
    <div className='App'>
       <MetaTags>
            <title>Arcadia start page</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </MetaTags>
    </div>
  );
}

export default launchPage