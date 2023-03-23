import React, { useEffect, useState, Suspense } from "react";

import UiLoading from "../../components/uiComponents/uiLoading";

import {getSwApiUrlData} from "../../utils/network";

import {
    BASE_URL,
    BASE_URL_CHARACTER   
} from "../../constants/ConstantApi";


// import styles from "./CardPage.module.css";


const CardList = React.lazy(() => import("../../components/cardList"));


const CardPage = () => {
  
    const[characters, setCharacters] = useState([]);  

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
            <Suspense fallback={<UiLoading />}>
                    <CardList characters={characters}/>  
            </Suspense>                                   
        </>
        
    )
};

export default CardPage;


