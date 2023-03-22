import { useEffect, useState } from "react";

import CardList from "../../components/cardList";


import {getSwApiUrlData} from "../../utils/network";

import {
    BASE_URL,
    BASE_URL_CHARACTER   
} from "../../constants/ConstantApi";


// import styles from "./CardPage.module.css";


const CardPage = () => {
  
    const[characters, setCharacters] = useState([]);
    // const[locations, setLocations] = useState([]);
    // const[episodes, setEpisodess] = useState([]);

    const getDataFeth = async(url) => {
        const dataCharacter = await getSwApiUrlData(url);      
        
        if(dataCharacter) {
            const cardList = dataCharacter.results.map(({ 
                gender,               
                id,              
                image,               
                location,               
                name,             
                origin,             
                species,             
                status,              
                type,               
                url
            }) => {
                return{
                    gender,               
                    id,              
                    image,               
                    location,               
                    name,             
                    origin,             
                    species,             
                    status,              
                    type,               
                    url
                }          
            });
            
            setCharacters(cardList);            
        };
    };

    useEffect(() => {
        getDataFeth(BASE_URL+BASE_URL_CHARACTER)
    }, []);

    return(      
        <>  
            
            <CardList characters={characters}/>            
        </>
    )
};

export default CardPage;


