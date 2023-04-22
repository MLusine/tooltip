import React from 'react';
import Tooltip from './components/Tooltip';

const App = () => {
const style = {
  
}
  return (
    <div className='container'>
      <Tooltip text="Hello" style={{style}}>
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;



