import React, { useEffect, useState, Suspense } from "react";

import UiLoading from "../../components/uiComponents/uiLoading";

import {
    BASE_URL,
    BASE_URL_CHARACTER,
    BASE_URL_PAGE
} from "../../constants/ConstantApi";


// import styles from "./CardPage.module.css";


const CardList = React.lazy(() => import("../../components/cardList"));


const CardPage = () => {    
    const[cards, setCards] = useState([]);
    const[currentPage, setCurrentPage] = useState(0);       
    const[fetching, setFetching] = useState(true);     
   
    const scrollHanndler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
           setFetching(true);           
        };  
    };

    useEffect(()=> {
        if(fetching) {
        const data = fetch(`${BASE_URL}${BASE_URL_CHARACTER}${BASE_URL_PAGE}${currentPage}`)
        .then(res => res.json())
        .then(data => { 
            setCards([...cards, ...data.results]);
            setCurrentPage(prevState => prevState + 1); 
        })
        .finally(() => setFetching(false))
    };
    }, [fetching])
    
    useEffect(() => {
        document.addEventListener("scroll", scrollHanndler)
        return function () {
            document.removeEventListener("scroll", scrollHanndler)
        };
    }, [cards]);
   
    return(      
        <>           
            <Suspense fallback={<UiLoading />}>
                <CardList cards={cards}/>  
            </Suspense>               
                                             
        </>        
    );
};

export default CardPage;


