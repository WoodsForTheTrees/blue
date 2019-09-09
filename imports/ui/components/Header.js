import React from "react";
import {Helmet} from "react-helmet";



const Header = () => (
  <div>
    <Helmet>
      <title>The Woods for the Trees</title>
      <meta charSet="utf-8" />
      <meta name = "viewport"
      content = "width = device-width, initial-scale = 1.0" />

      <link rel="icon" type="image/png" href="favicon.png" />
      <meta property="og:site_name" content="Woods for the Trees" />
      <meta property="og:title" content="Woods for the Trees" />
      <meta property="og:description" content="Learning to listen"/>
      <meta property="og:image" content="https://woodsforthetrees.com/img/image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content="old growth trees" />
      <meta property="og:url" content="https://woodsforthetrees.com/index.html" />
      <meta property="og:type" content="website"/>

      {/* iOS settings */}
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="icon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  </div>
)

export default Header