import PropTypes from 'prop-types';
import React, {useEffect, useState, Suspense} from 'react';

import closeImg from "./img/closeImg.png";

import UiLoading from '../uiComponents/uiLoading/UiLoading';


import styles from './Modal.module.css';


const LocationPage = React.lazy(()=> import("../locatonPage"));
const EpisodesPage = React.lazy(()=> import("../episodesPage"));


const Modal = ({objCardsList, isOpen, setIsOpen, personFavorites}) => { 
    const[listEpisodes, setListEpisodes] = useState([])
    const[listLocation, setListLocation] = useState([])    

    const handeleClickModalClose = (e) => {
        setIsOpen(false);                  
        };
          
        const {
            name,
            image, 
            id           
        } =  objCardsList; 

        const {          
            episode,
            gender,
            location,          
            species,
            status
        } = personFavorites; 
        
                
       useEffect(() => {
            if(isOpen) {               
                setListEpisodes(episode);
                setListLocation(
                    [{name: location.name, url: location.url}]                 
                );
            }                
        }, [personFavorites])                       
       
    return (        
            <div className={isOpen ? styles.modal_container__active : styles.modal_container}>
               <div>
                    <img 
                        className={styles.modal_container__closeImg} 
                        src={closeImg}                        
                        onClick={handeleClickModalClose }/>                       
                </div> 

                <div className={styles.modal_container__content}>
                
                    <div key={personFavorites.id}>
                         <img 
                            className={styles.modal_container__personImg}
                            src={personFavorites.image}
                            alt={personFavorites.name}/>                                     
                    </div>

                    <div>
                        <p className={styles.modal_container__p}>
                            <b>Name: </b>{personFavorites.name}<br/><b>Gender: </b>{gender}<br/><b>Species: </b>{species}<br/><b>Status: </b>{status}
                        </p>

                        <Suspense fallback={<UiLoading />}>
                            {isOpen && <LocationPage listLocation={listLocation} />}                                
                        </Suspense>
                    </div> 
                        <div  className={listEpisodes.length > 20 ? styles.modal_container__components && styles.modal_container__activeOverFlow : styles.modal_container__components}>
                            <Suspense fallback={<UiLoading />}>
                                {isOpen && <EpisodesPage listEpisodes={listEpisodes} />}
                            </Suspense>
                        </div>
                </div>
            </div>               
        );
    };
            

Modal.propTypes = {
    objCardsList:PropTypes.object,
    isOpen:PropTypes.bool,
    setIsOpen:PropTypes.func,
    personFavorites:PropTypes.object
};

export default Modal;

 

        