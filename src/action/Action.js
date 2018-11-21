import { Display_Name } from './Type';
 
export const displayName = function(input) {
    return ({
        type: Display_Name,
        payload: input,
    })
}