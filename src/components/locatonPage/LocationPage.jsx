import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {getSwApiUrlData} from "../../utils/network";


import styles from './LocationPage.module.css';


const LocationPage = ({listLocation}) => {    
    const [locationPeopleInfo, setLocationPeopleInfo] = useState([]);   
   
    useEffect(() => {       
    (async() => {
        const data =  await getSwApiUrlData(listLocation[0].url);
        if(data) {
            setLocationPeopleInfo([data])
        };
    })()
    }, [listLocation])    
    
    return (
            <ul className={styles.location_container}>
                {locationPeopleInfo.map(({name, type, id}) => (                                                     
                    <li className={styles.location_container__li} key={id}> 
                        <p className={ styles.location_container__p}>
                            <b>Location: </b>{name}<br/><b>Type: </b>{type}
                        </p> 
                    </li>
                    ))
                }            
            </ul>
    );
};

LocationPage.propTypes = {
    listLocation:PropTypes.array
};

export default LocationPage;