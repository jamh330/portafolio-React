// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importar componentes
import Navbar from './components/Navbar';
import Header from './components/header/headerComponent.js';

//importar secciones
import HomeSection from './components/home/HomeSection.js';
import ProjectsSection from './components/projects/ProjectsSection.js';
import ServicesSection from './components/services/ServicesSection.js';
import RepoSection from './components/repo/RepoSection.js';
import BlogSection from './components/blog/BlogSection.js';
import ContactSection from './components/contact/ContactSection.js';


function App() {
  //funcion para modo oscuro
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //datos de las rutas para iterar
  const routesData = [
    { name: 'Inicio', path: '', title:'Hola! 👋', subTitle:'Te invito a visitar mi portafolio', component:HomeSection },
    { name: 'Proyectos', path: '/projects',title:'Proyectos',subTitle:'Conoce mis proyectos realizados',component:ProjectsSection },
    { name: 'Servicios', path: '/services',title:'Servicios',subTitle:'Aquí podrás revisar el catalogo de servicios que ofrezco',component:ServicesSection },
    { name: 'Repositorios', path: '/reposit',title:'Repositorios',subTitle:'Repositorio de código para reutilizar en tus proyectos',component:RepoSection },
    { name: 'Blog', path: '/blog',title:'Blos',subTitle:'Encuentra noticias y novedades de informática',component:BlogSection },
    { name: 'Contacto', path: '/contact',title:'Contacto',subTitle:'Tienes alguna duda? Escríbeme',component:ContactSection },
  ];

  return (
    <BrowserRouter>
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <section className={`${darkMode ? 'dark' : ''}`}>
          <div className='content'>
            <Routes>  
              //iterar las rutas
              {routesData.map((routeData) => (
                <Route key={routeData.path} path={routeData.path}
                  element={
                    <>
                      <Header title={routeData.title} subtitle={routeData.subTitle}/>
                      <routeData.component darkMode={darkMode}/>
                    </>
                  }
                />
              ))}
          </Routes>
        </div>
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;

