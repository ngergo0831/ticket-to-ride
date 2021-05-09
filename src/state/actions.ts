import { Player } from "../types";

export const MODIFY_PLAYER_COUNT = "Modify player count";
export const NEW_GAME = "New game";
export const GAME_STARTED = "Game started";
export const DRAW_DECK_CARD = "Draw deck card";
export const DRAW_CARD = "Draw card";

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

export const startGame = (name: string, num: number) => {
    const player: Player = { name, id: 1, isOwner: true };
    return {
        type: GAME_STARTED,
        payload: { player, num },
    };
};

export const drawFromDeck = (name: string, num: number) => {
    const player: Player = { name, id: 1, isOwner: true };
    return {
        type: DRAW_DECK_CARD,
        payload: { player, num },
    };
};

export const drawCard = (name: string, num: number) => {
    const player: Player = { name, id: 1, isOwner: true };
    return {
        type: DRAW_CARD,
        payload: { player, num },
    };
};
