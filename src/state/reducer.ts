import { MenuActions, MODIFY_PLAYER_COUNT } from "./actions";

export const playerCountReducer = (
    state = 1,
    action: MenuActions
) => {
    const { type, payload } = action;

    if (type === MODIFY_PLAYER_COUNT) {
        return state + payload;
    }

    return state;
};
