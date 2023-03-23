import PropTypes from 'prop-types';

import closeImg from "./img/closeImg.png";


import styles from './Modal.module.css';


const Modal = ({
        modalActive,
        setModalActive,
        personName, 
        personSrc,             
        personGender,
        personLocation,
        personOrigin,
        personSpecies,
        personStatus
    }) => {
    const handleClickClose = () => {
        setModalActive(false);
    };
 
    return (        
        <div className={modalActive ? styles.modal_container__active : styles.modal_container}>           
                <div>
                    <img 
                        src={closeImg} alt={personName}
                        className={styles.modal_container__img} 
                        onClick={handleClickClose } />                       
                </div>

                <div className={styles.modal_container__content}>
             <div>
                 <img className={styles.modal_container__personImg} src={personSrc} alt={personName} />  
             </div>
             <ul className={styles.modal_container__title}>
                 <li className={styles.modal_container__span}>Name: <p className={styles.modal_container__p}>{personName}</p></li> 
                 <li className={styles.modal_container__span}>Origin: <p className={styles.modal_container__p}>{personOrigin ==="unknown" ? "" : personOrigin}</p></li>
                 <li className={styles.modal_container__span}>Status: <p className={styles.modal_container__p}>{personStatus ==="unknown" ? "" : personStatus}</p> </li>
                 <li className={styles.modal_container__span}>Location: <p className={styles.modal_container__p}>{personLocation ==="unknown" ? "" : personLocation}</p> </li>
                 <li className={styles.modal_container__span}>Species: <p className={styles.modal_container__p}>{personSpecies}</p></li>
                 <li className={styles.modal_container__span}>Gender: <p className={styles.modal_container__p}>{personGender}</p></li>  
             </ul>  
     </div>          
        </div>
    )
}

Modal.propTypes = {
    modalActive:PropTypes.bool,
    setModalActive:PropTypes.func,
    personName:PropTypes.string,
    personSrc:PropTypes.string,           
    personGender:PropTypes.string,
    personLocation:PropTypes.string,
    personOrigin:PropTypes.string,
    personSpecies:PropTypes.string,
    personStatus:PropTypes.string,
};

export default Modal;