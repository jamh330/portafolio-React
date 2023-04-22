import React, { useState,useEffect } from 'react';
import {Link } from 'react-router-dom';
import Header from '../header/headerComponent.js';
import styles from './ContentMobile.module.css';

/*  
Componente que se encarga de mostrar las secciones 
en la pagina inicial en la versión movil
*/

const ContentMobile = ({ routeSkip,darkMode }) => {

  const routesData = [
    { name: 'Inicio', path: '', title:'Hola! 👋', subTitle:'Te invito a visitar mi portafolio',nameButton:"" },
    { name: 'Proyectos', path: '/projects',title:'Proyectos 📋',subTitle:'Conoce mis proyectos realizados',nameButton:"Ver Proyectos" },
    { name: 'Servicios', path: '/services',title:'Servicios 🔧',subTitle:'Aquí podrás revisar el catalogo de servicios que ofrezco',nameButton:"Ver Servicios"},
    { name: 'Repositorios', path: '/reposit',title:'Repositorios 👨‍💻',subTitle:'Repositorio de código para reutilizar en tus proyectos',nameButton:"Ver Repositorios" },
    { name: 'Blog', path: '/blog',title:'Blogs 📰',subTitle:'Encuentra noticias y novedades de informática',nameButton:"Ver Noticias" },
    { name: 'Contacto', path: '/contact',title:'Contacto 📩',subTitle:'Tienes alguna duda? Escríbeme',nameButton:"Contactar" }
  ];
  routesData.push({name: '', path: '',title:'',subTitle:''});
 
  const firstIndex = routesData.findIndex(item => item.name === routeSkip);
  const skippedItem = routesData.splice(firstIndex, 2)[1];
  routesData.unshift(skippedItem);

  const scrollTop = () => {
    document.querySelector('section').scrollTo(0, 0);
  }
    return (
        <>
            {routesData
            .filter(routeData => routeData.name !== 'Inicio' && routeData.name !== '')
            .map(routeData => (
                <>
                    <Header
                        title={routeData.title}
                        subtitle={routeData.subTitle}
                        description={routeData.description}
                    />
                    <Link 
                      to={routeData.path} 
                      onClick={() => {scrollTop()}}
                      className={`${darkMode ? styles.dark : ''} ${styles.btnSection}`}
                    >
                      {routeData.nameButton}
                    </Link>
                    <div className='adjustMovil'></div>
                </>
            ))}
        </>
    );
  }
  
  
  export default ContentMobile;