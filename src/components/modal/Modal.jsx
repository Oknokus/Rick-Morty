import PropTypes from 'prop-types';

import closeImg from "./img/closeImg.png";


import styles from './Modal.module.css';


const Modal = ({modalActive, setModalActive}) => {
    const handleClickClose = () => {
        setModalActive(false)
    }
    return (
        <div className={modalActive ? styles.modal_container__active : styles.modal_container}>           
                <div>
                    <img 
                        src={closeImg} alt="closeImg"
                        className={styles.modal_container__img} 
                     onClick={handleClickClose } />
                </div>
            <div 
                className={styles.modal_container__content}>
               
            </div>
        </div>
    )
}

Modal.propTypes = {
    modalActive:PropTypes.bool,
    setModalActive:PropTypes.func
};

export default Modal;