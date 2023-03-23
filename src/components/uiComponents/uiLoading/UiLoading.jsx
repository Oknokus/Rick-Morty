import loadingBlack from "./loadingImg/loadingBlack.svg";


import styles from "./UiLoading.module.css";


const UiLoading = () => {

    return (
        <div className={styles.loading_container}>        
            <img
                className={styles.loading_container_img}
                src={loadingBlack} alt="loadingImg"/>        
        </div>
    )
}

UiLoading.propTypes = {
    
}

export default UiLoading;