import { Display_Name } from '../action/Type';
const initialState = {
    name:"",
}
export default function(state = initialState, action) {
    switch (action.type) {
        case Display_Name:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state; 
    }
}