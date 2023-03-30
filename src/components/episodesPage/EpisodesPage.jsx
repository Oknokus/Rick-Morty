import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {fethUrlEpisodes} from "../../services/services";


import { 
    BASE_URL,
    BASE_URL_CHARACTER,
    BASE_URL_LOCATION
 } from '../../constants/ConstantApi';

import styles from './EpisodesPage.module.css';


const EpisodesPage = ({listEpisodes}) => {  
        const [episodesPeople, setEpisodesPeople] = useState([]);
       
        useEffect(() => {           
            (async() => {
                const data =  await fethUrlEpisodes(listEpisodes);
                setEpisodesPeople(data)
            })()
           
        }, [listEpisodes])
             

    return (
        <>             
            {episodesPeople.map(({name, created, episode, id}) => (                                                     
                    <li  className={styles.episodes_container__li} key={id}> 
                            <p className={ styles.episodes_container__p}>
                                <b>Episode: </b>{episode}<b><br/>Name: </b>{name}<b><br/>Created: </b>{created}
                            </p> 
                    </li>
            ))
            }   
        </>
    )
}

EpisodesPage.propTypes = {
    listEpisodes:PropTypes.array
}

export default EpisodesPage;