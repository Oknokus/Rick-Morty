import {    
    PATH_PERSON,
    PATH_EXTENSION
} from "../constants/ConstantApi";


// PersonPage id
export const personPageId = (url) => {
    const id = url
        .replace(PATH_PERSON, "")
        .replace(PATH_EXTENSION, "")
    return id;
 };

