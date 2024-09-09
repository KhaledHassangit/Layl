import * as Actions from "../Type"

const initialState = {
    NewCategory:[],
    allCategory:[],
    loading:true,
}


const CategoryReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case Actions.CREATE_CATEGORY:
            return {
                ...state,
                NewCategory:action.payload,
                loading:false,
            }

        case Actions.GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategory:action.payload,
                loading:false,
            }
        
        case Actions.GET_ERROR :
            return{
                allCategory:action.payload,
            loading:false,
            }

        default: 
        return state;
    }
}

export default CategoryReducer;