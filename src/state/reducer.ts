import { InitType, ModifyPlayerCount } from "../interfaces";
import {
    GameActions,
    initialGameState,
    MenuActions,
    Player,
    Status,
} from "../types";
import { MODIFY_PLAYER_COUNT, NEW_GAME } from "./actions";

export const playerCountReducer = (state = 1, action: ModifyPlayerCount) => {
    const { type, payload } = action;

    if (type === MODIFY_PLAYER_COUNT) {
        return state + (payload as number);
    }

    return state;
};
/*
export const gameStateReducer = (
    state = initialGameState,
    action: GameActions
) => {
    const { type, payload } = action;

    return state;
};*/

export const menuStateReducer = (
    state = initialGameState,
    action: MenuActions
) => {
    const { type, payload } = action;

    if (type === NEW_GAME) {
        const { player, num } = payload as InitType;
        const newState = initialGameState;
        let owner: Player = player;
        newState.players.length = 0;
        newState.players.push(owner);
        newState.gameStatus = Status.WAITING_FOR_PLAYERS;
        newState.maxPlayers = num;
        newState.code = Math.random().toString(36).substring(7);
        return newState;
    }

    return state;
};
