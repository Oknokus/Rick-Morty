import linkImg from "../uiLink/linkImg/linkImg.png"


import styles from './UiLink.module.css';


const UiLink = () => {
        var t
    function handleClickUp() {
        if(window.pageYOffset !== 0) {
            window.scrollBy(0,-100);
            t = setTimeout(handleClickUp,20);
        } else clearTimeout(t);
            return false;       
        } 

    return (
        <>                   
            <img 
                className={styles.link_container__img}
                src={linkImg} 
                onClick={handleClickUp}
                alt="linkImg" />                            
        </>
    )
}

export default UiLink;