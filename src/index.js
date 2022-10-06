import React from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from './components/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sesion = true;
const App = () => {
  return (
    <>
    {sesion === true ?(
      <>
      <Alumno/>
      </>
    ) : (
      <h2>No has iniciado sesion</h2>
    )}
  </>
  );
};

root.render(<App/>);