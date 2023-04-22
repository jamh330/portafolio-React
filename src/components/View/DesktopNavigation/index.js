import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../Navbar';
import Header from '../../header/headerComponent.js';
import HomeSection from '../../home/HomeSection.js';
import ProjectsSection from '../../Section/projects/ProjectsSection.js';
import ServicesSection from '../../Section/services/ServicesSection.js';
import RepoSection from '../../Section/repo/RepoSection.js';
import BlogSection from '../../Section/blog/BlogSection.js';
import ContactSection from '../../Section/contact/ContactSection.js';

function DesktopNavigation() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //datos de las rutas para iterar
  const routesData = [
    { name: 'Inicio', path: '', title:'Hola! 👋', subTitle:'Te invito a visitar mi portafolio',"description":"Te doy la bienvenida, aquí podrás encontrar información sobre mi trabajo, una selección de mis proyectos de informática más destacados y ayuda para tus proyectos." ,component:HomeSection },
    { name: 'Proyectos', path: '/projects',title:'Proyectos 📋',subTitle:'Conoce mis proyectos realizados',"description":"Descubre mis proyectos enfocados en mejorar la experiencia del usuario y optimizar soluciones para clientes. Principalmente trabajo con WordPress y componentes personalizados en Node.js, creando soluciones efectivas y de alta calidad.",component:ProjectsSection },
    { name: 'Servicios', path: '/services',title:'Servicios 🔧',subTitle:'Aquí podrás revisar el catalogo de servicios que ofrezco',"description":"Soluciones a medida para cada cliente, centradas en mejorar la experiencia del usuario. Nos especializamos en desarrollo web con WordPress y componentes personalizados en Node.js.",component:ServicesSection },
    { name: 'Repositorios', path: '/reposit',title:'Repositorios 👨‍💻',subTitle:'Repositorio de código para reutilizar en tus proyectos',"description":"Mis proyectos alojados en GitHub. En esta sección se pueden visualizar los diferentes proyectos, acceder a sus repositorios y conocer las tecnologías utilizadas.",component:RepoSection },
    { name: 'Blog', path: '/blog',title:'Blogs 📰',subTitle:'Encuentra noticias y novedades de informática',"description":"Espacio donde se comparten artículos y noticias relacionadas con un tema específico, en este caso, informática. Los artículos pueden cubrir una variedad de temas, como tendencias, noticias, tutoriales, consejos, opiniones y más.",component:BlogSection },
    { name: 'Contacto', path: '/contact',title:'Contacto 📩',subTitle:'Tienes alguna duda? Escríbeme',"description":"",component:ContactSection },
  ];
  
  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <section className={`${darkMode ? 'dark' : ''}`}>
          <div className='content'>
            <Routes>
              {routesData.map((routeData) => (
                <Route
                  key={routeData.path}
                  path={routeData.path}
                  element={
                    <>
                      <Header
                        title={routeData.title}
                        subtitle={routeData.subTitle}
                        description={routeData.description}
                      />
                      <routeData.component darkMode={darkMode} />
                      <div className='adjustMovil'></div>
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


export default DesktopNavigation;

