"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Make sure React and ReactDOM are available globally for UMD bundle
    // if (typeof window !== 'undefined') {
    //   window.React = React;
    //   window.ReactDOM = require('react-dom');
    // }

    // Wait for AcmeUI to be loaded
    const checkAndLoad = () => {
      if (typeof window !== 'undefined' && window.AcmeUI) {
        console.log('AcmeUI loaded:', window.AcmeUI);
        setIsLoaded(true);
      } else {
        // Try again in 100ms
        setTimeout(checkAndLoad, 100);
      }
    };

    checkAndLoad();
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Get the Button component from the UMD bundle
  const UMDButton = window.AcmeUI?.Button;
  


  if (!UMDButton) {
    return <div>Button component not found</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">UMD Button Demo</h1>

      <UMDButton>
        Hello
      </UMDButton>
      
      {/* Use React.createElement to properly instantiate the UMD component */}
      {/* {React.createElement(UMDButton, { onClick: handleClick }, "Hello from UMD Button")} */}
      
      <br />
      <br />
{/*       
      {React.createElement(UMDButton, { 
        onClick: handleClick, 
        className: "btn btn-primary" 
      }, "Primary Button")} */}
      
      <br />
      <br />
{/*       
      {React.createElement(UMDButton, { 
        onClick: handleClick, 
        className: "btn btn-secondary" 
      }, "Secondary Button")} */}
    </main>
  );
}
