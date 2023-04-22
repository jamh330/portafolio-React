//Realizar la importación de los componentes
import React, { useState,useEffect } from 'react';
import DesktopNavigation from './components/View/DesktopNavigation';
import MobileNavigation from './components/View/MobileNavigation';
import { useMediaQuery } from 'react-responsive';


function App() {

  /*En esta parte se realiza la validación de la resolución de la pantalla
  Esto se realiza en caso que se quiera mostrar un componente u otro dependiendo de la resolución de la pantalla
  */

  //Con la libreria useMediaQuery se realiza la validación de la resolución de la pantalla
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  //Se retorna el componente que se desea mostrar en base a la variable isMobile
  //Este archivo se encuentra en la carpeta src/components/View
  return (
    <>
    {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </>
  );
}

export default App;

