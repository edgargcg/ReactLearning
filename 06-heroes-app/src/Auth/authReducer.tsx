import { contextTypes } from "../Types/types";

export const authReducer = (state : any = {}, action : any) => {
    switch (action.type) {
        case contextTypes.login:
            return {
                ...action.payload,
                logged: true
            };
        case contextTypes.logout:
            return {
                logged: false
            };
        default:
            return state;
    }
}