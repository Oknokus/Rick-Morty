import PropTypes from 'prop-types';
import { useState } from 'react';

import Modal from "../../components/modal";


import styles from './CardList.module.css';


const CardList = ({characters}) => {  
    const[modalActive, setModalActive] = useState(false);

    const handleClickOpen = () => {
        setModalActive(true)
    };
     
    return ( 
            <>      
                <ul className={styles.cardList_container}>
                    {
                        characters.map(({id, name, image}) => 
                            <li 
                                className={styles.cardList_container__item} key={id}
                                onClick={handleClickOpen}>                 
                                    <img 
                                        className={styles.cardList_container__photo} src={image} alt={name}/>
                                    <p className={styles.cardList_container__name}>Name: {name}</p>                        
                            </li>
                        )
                    }
                </ul>   

                <Modal modalActive={modalActive} setModalActive={setModalActive}/>
            </>   
    )
};

CardList.propTypes = {
    characters:PropTypes.array
};


export default CardList;

