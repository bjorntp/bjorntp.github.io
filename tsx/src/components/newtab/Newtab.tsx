import React from 'react';
import Weather from './Weather'
import LinkBox from './LinkBox'

const Newtab = () => {

  return (
    <React.Fragment>
      <div className="font-mono w-screen h-screen flex flex-col justify-around items-center">
          <div><Weather /></div>
          <div className="flex justify-center w-screen"><LinkBox /></div>
          <div></div>
      </div>
    </React.Fragment>
  );
}

export default Newtab;
