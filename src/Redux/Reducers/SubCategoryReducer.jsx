import * as Actions from "../Type"

const initialState = {
    NewSubCategory:[],
    allSubCategory:[],
    loading:true,
}


const SubCategoryReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case Actions.CREATE_SUB_CATEGORY:
            return {
                ...state,
                NewSubCategory:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_SUB_CATEGORIES:
            return {
                ...state,
                allSubCategory:action.payload,
                loading:false,
            }
        
        case Actions.GET_ERROR :
            return{
                allSubCategory:action.payload,
            loading:false,
            }

        default: 
        return state;
    }
}

export default SubCategoryReducer;