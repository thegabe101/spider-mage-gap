import { SET_MAGE_FIRST_NAME, SET_MAGE_LAST_NAME } from "../types";
export const updateMageFirstName = (firstName) => (dispatch, getState) => {
    try {
        console.log(firstName, getState());
        dispatch({
            type: SET_MAGE_FIRST_NAME,
            payload: {
                firstName,
                message: `You have rolled a first name of ${firstName} `,
            },
        });
    } catch (error) {
        console.log("Error", error);
    }
};
export const updateMageLastName = (lastName) => (dispatch, getState) => {
    try {
        // console.log(lastName);
        // console.log(nameReducer.mageFirstName);
        // console.log(nameReducer.mageLastName);
        // console.log(firstName);
        // console.log(lastName);
        dispatch({
            type: SET_MAGE_LAST_NAME,
            payload: {
                lastName,
                message: `You have rolled a last name of ${lastName} `,
            },
        });
    } catch (error) {
        console.log("Error", error);
    }
};