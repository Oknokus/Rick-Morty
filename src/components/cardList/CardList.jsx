import PropTypes from 'prop-types';
import { useState } from 'react';

import Modal from "../modal";

import {personId} from "../../services/services";


import styles from './CardList.module.css';


const CardList = ({cards}) => {
    const[isOpen, setIsOpen] = useState(false);
    const[personId, setPersonId] = useState();
    const[personFavorites, setPersonfavorites] = useState({})
    

    const handeleClickModalOpen = (e) => {
        setIsOpen(true);
        setPersonId(e.currentTarget.id);
        setPersonfavorites(cards[e.currentTarget.id-1])
    };
   
    return (
        <>  
            <ul className={styles.cardList_container}>
                {cards.map((objCardsList) => 
                    <li  
                        className={styles.cardList_container__item}
                        key={objCardsList.id}>
                            <img 
                                className={styles.cardList_container__photo}
                                src={objCardsList.image} 
                                onClick={handeleClickModalOpen}
                                alt={objCardsList.name}
                                id={objCardsList.id}/>
                            <span className={styles.cardList_container__name}>{objCardsList.name}</span> 
                        <Modal 
                            objCardsList={objCardsList} 
                            isOpen={isOpen}
                            setIsOpen={setIsOpen} 
                            personFavorites={personFavorites}/>
                    </li>
                )}
            </ul>
        </>
    )
}

CardList.propTypes = {
    cards:PropTypes.array
};


export default CardList;