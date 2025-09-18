import { useEffect, useState } from "react";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {

      // Wait for AcmeUI to be loaded
      const checkAndLoad = () => {
        if (typeof window !== "undefined" && window.AcmeCore) {
          console.log("AcmeCore loaded:", window.AcmeCore);
          setIsLoaded(true);
        } else {
          // Try again in 100ms
          setTimeout(checkAndLoad, 100);
        }
      };
  
  
    // Provide JSX runtime globally
    import('react/jsx-runtime').then(runtime => {
      window.require = function(name) {
        if (name === 'react/jsx-runtime') return runtime;
        if (name === 'react') return React;
        throw new Error(`Module ${name} not found`);
      };
      
      // Your existing checkAndLoad logic here
      checkAndLoad();
    });
  }, []);

  const AcmeCore = window.AcmeCore;

  return <div>App {isLoaded ? "Loaded" : "Not Loaded"}
  <AcmeCore.MatchStatus status="won" venue="Mumbai" date="2025-07-07" result="100-100" >
    <AcmeCore.Button onClick={() => alert("clicked")}>Click epic</AcmeCore.Button>
  </AcmeCore.MatchStatus>
  </div>;
};

export default App;
