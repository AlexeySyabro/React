import { CHANGE_SHOW_NAME } from "./actions"

const initialState = {
    name: 'Ну а чего ты ожидал))',
    showName: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        default:
            return state;
    }
};