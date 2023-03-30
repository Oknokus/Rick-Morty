import {    
    PATH_PERSON,
    PATH_EXTENSION,
    PAGE_QUERY_URL
} from "../constants/ConstantApi";


// // Person id
// export const personId = (url) => {
//     const id = url
//         .replace(PATH_PERSON, "")
//         .replace(PATH_EXTENSION, "")
//     return Number(id);
//  };

// //  Page now
// export const queryPage = (url) => {
//     const page = url
//         .replace(PAGE_QUERY_URL, "")
//     return Number(page);
// }

// Fetch all episodes people

export const fethUrlEpisodes = async(arr) => {
    const result = await Promise.all(arr.map(url => {
        return (fetch(url)).then(url => url.json())    
    }));

    return  result;
 }; 



          


