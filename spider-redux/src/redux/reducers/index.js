import { SET_MAGE_FIRST_NAME, SET_MAGE_LAST_NAME } from "../types";

const INITIAL_STATE = {
    firstName: "Your",
    lastName: "Mage",
    message: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MAGE_FIRST_NAME:
            return {
                ...state,
                ...action.payload,
            };
        case SET_MAGE_LAST_NAME:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return INITIAL_STATE;
    }
};