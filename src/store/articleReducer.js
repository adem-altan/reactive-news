
const initArticle = {
    articles: [],
    countryCode: 'au'
};

const articleReducer = (state = initArticle, action) => {
    switch(action.type) {
        case "ADD_ARTICLE":
            state = {...state, articles: action.payload};
            return state; 
        case "GET_TITLE":
            state = { ...state, title: action.payload};
            return state;
        case "GET_DESCRIPTION":
            state = { ...state, description: action.payload};
            return state;
        case "GET_SOURCE":
            state = {...state, source: action.payload};
            return state;
        case "GET_IMAGETOURL":
            state = {...state, imageToUrl: action.payload};
            return state;
        case "GET_ARTICLES_BY_CATEGORY":
            return {
                ...state,
                articles: action.article
            }
        case "CHANGE_COUNTRY":
            return {
                ...state,
                countryCode: action.countryCode
            }
        default:
            return state;
    }
};

export default articleReducer;
// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('state');
//         if(serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState);
//     } catch(error) {
//         console.log(error);
//         return undefined;
//     }
// }
