import PropTypes from 'prop-types';

import closeImg from "./img/closeImg.png";


import styles from './Modal.module.css';


const Modal = ({objCardsList, isOpen, setIsOpen, personFavorites}) => {     
    const handeleClickModalClose = (e) => {
        setIsOpen(false)
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
            origin,
            species,
            status
        } = personFavorites; 

               
    return ( 
        <>  
            <div className={isOpen ? styles.modal_container__active : styles.modal_container}>           
                <div>
                    <img 
                        src={closeImg}
                        className={styles.modal_container__img} 
                        onClick={handeleClickModalClose }/>                       
                </div>
                            <div className={styles.modal_container__content}>
                                        <div key={personFavorites.id}>
                                            <img 
                                                className={styles.modal_container__personImg}
                                                src={personFavorites.image}
                                                alt={personFavorites.name}/>  
                                        </div>
                                        <ul className={styles.modal_container__ul}>
                                            <li className={styles.modal_container__li}>                                               
                                                <span className={styles.modal_container__span}>Name <p className={styles.modal_container__p}>{personFavorites.name}</p></span> 
                                                <span className={styles.modal_container__span}>Gender <p className={styles.modal_container__p}>{gender}</p></span>                                           
                                                <span className={styles.modal_container__span}>Species <p className={styles.modal_container__p}>{species}</p></span>
                                                <span className={styles.modal_container__span}>Status <p className={styles.modal_container__p}>{status}</p></span>
                                                {/* <span>Origin: <p className={styles.modal_container__p}>{origin.name}</p></span>  */}
                                                {/* <span>Lcation: <p className={styles.modal_container__p}>{location.name}</p></span>  */}
                                            </li>                                            
                                        </ul>  
                            </div> 
            </div>
        </>
        )
    };
            

Modal.propTypes = {
    objCardsList:PropTypes.object,
    isOpen:PropTypes.bool,
    setIsOpen:PropTypes.func,
    personFavorites:PropTypes.object
};

export default Modal;

 

        