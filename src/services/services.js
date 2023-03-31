// Fetch all episodes people
export const fethUrlEpisodes = async(arr) => {
    const result = await Promise.all(arr.map(url => {
        return (fetch(url)).then(url => url.json())    
    }));

    return  result;
 }; 

// Fetch data
 export const getSwApiUrlData = async(url) => {
    try {
        const data = await fetch(url);

        if(!data.ok) {
            console.log("Eror not fetch", data.status);
            return false;
        };    
        
        return data;
    } catch (error) {        
        console.warn("Error: ", error.message);
        return false;
    }  
}



          


