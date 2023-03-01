import React from 'react'
import MetaTags from 'react-meta-tags'
import {AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";

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
      <header>
      
      </header>
      <main>
        <h1>Arcadia</h1>
        <div className='carosel'></div>
        <h2>Categories</h2>
        <div className='categories'>

        </div>
      </main>
    </div>
  );
}

export default launchPage