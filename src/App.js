import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
     <div>Welcome...</div>
    </>
  );
}

export default App;
