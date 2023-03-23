import PropTypes from 'prop-types';
import {useState} from 'react';

import Modal from "../../components/modal";


import styles from './CardList.module.css';


const CardList = ({characters}) => {  
    const[modalActive, setModalActive] = useState(false);
   

    const[personName, setPersonName] = useState("");  
    const[personSrc, setPersonSrc] = useState("");
    const[personGender, setPersonGender] = useState("");
    const[personLocation, setPersonLocation] = useState("");
    const[personOrigin, setPersonOrigin] = useState("");
    const[personSpecies, setPersonSpecies] = useState("");
    const[personStatus, setPersonStatus] = useState("");
    

    const handleClickOpen = (e) => {  
            setPersonName(e.target.getAttribute("data-name"));
            setPersonSrc(e.target.src); 
            setPersonGender(e.target.getAttribute("data-gender"));
            setPersonLocation(e.target.getAttribute("data-location"));
            setPersonOrigin(e.target.getAttribute("data-origin"));
            setPersonSpecies(e.target.getAttribute("data-species"));
            setPersonStatus(e.target.getAttribute("data-status"));

            setModalActive(true); 
        }
     
    return ( 
            <>  
                <ul className={styles.cardList_container}>
                    {
                        characters.map(({
                            id, 
                            name, 
                            image,  
                            gender,     
                            location,    
                            origin,             
                            species,             
                            status,       
                            }) => 
                            <li 
                                className={styles.cardList_container__item} 
                                key={id}                                    
                                onClick={handleClickOpen}>                 
                                    <img 
                                        className={styles.cardList_container__photo} 
                                        src={image} alt={name}
                                        data-name={name}
                                        data-gender={gender}
                                        data-location={location.name}
                                        data-origin={origin.name}
                                        data-species={species}
                                        data-status={status}/> 
                                        <p className={styles.cardList_container__name}>{name}</p>                                                            
                            </li>
                        )
                    }
                </ul>
            <div className={styles.cardList_container__modal}>  
            <Modal 
                modalActive={modalActive}
                setModalActive={setModalActive} 
                personSrc={personSrc} 
                personName={personName} 
                personGender={personGender}
                personLocation={personLocation}
                personOrigin={personOrigin}
                personSpecies={personSpecies}
                personStatus={personStatus}/>
            </div>
        </> 
    )
};

CardList.propTypes = {
    characters:PropTypes.array
};


export default CardList;

