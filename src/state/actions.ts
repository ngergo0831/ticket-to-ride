import { Player } from "../types";

export const MODIFY_PLAYER_COUNT = "Modify player count";
export const NEW_GAME = "New game";
export const GAME_STARTED = "Game started";

export const modifyPlayerCount = (num: number) => ({
    type: MODIFY_PLAYER_COUNT,
    payload: num,
});

export const createRoom = (name: string, num: number) => {
    const player: Player = { name, id: 1, isOwner: true };
    return {
        type: NEW_GAME,
        payload: { player, num },
    };
};

export const startGame = (name: string, num: number) =>{
    const player: Player = { name, id: 1, isOwner: true };
    return {
        type: GAME_STARTED,
        payload: { player, num },
    };
};