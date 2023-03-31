import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {fethUrlEpisodes} from "../../services/services";


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
            <ul className={styles.episodes_container}>           
                {episodesPeople.map(({name, created, episode, id}) => (
                        <li className={styles.episodes_container__li} key={id}> 
                                <p className={ styles.episodes_container__p}>
                                    <b>Episode: </b>{episode}<br/><b>Name: </b>{name}<br/><b>Created: </b>{created}
                                </p> 
                        </li>
                    ))
                }
            </ul> 
    );
};

EpisodesPage.propTypes = {
    listEpisodes:PropTypes.array
}

export default EpisodesPage;