import { NewGameInit, NewGameInitWithName } from "../interfaces";
import { GameState, Player } from "../types";

export const MODIFY_PLAYER_COUNT = "Modify player count";
export const MODIFY_PLAYER_NAME = "Modify player name";
export const NEW_GAME = "New game";
export const GAME_STARTED = "Game started";
export const DRAW_DECK_CARD = "Draw deck card";
export const DRAW_CARD = "Draw card";
export const JOIN_ROOM = "Join room";
export const UPDATE_GAME_STATE = "Update game state";

export const modifyPlayerCount = (num: number) => ({
    type: MODIFY_PLAYER_COUNT,
    payload: num,
});

export const modifyPlayerName = (name: string) => ({
    type: MODIFY_PLAYER_NAME,
    payload: name,
});

export const createRoom = (init: NewGameInit) => {
    const player: Player = { name: init.name, id: '1', isOwner: true };
    return {
        type: NEW_GAME,
        payload: { player, num: init.roomsize, code: init.roomcode },
    };
};

export const startGame = (name: string, num: number) => {
    const player: Player = { name, id: '1', isOwner: true };
    return {
        type: GAME_STARTED,
        payload: { player, num },
    };
};

export const drawFromDeck = (name: string, num: number) => {
    const player: Player = { name, id: '1', isOwner: true };
    return {
        type: DRAW_DECK_CARD,
        payload: { player, num },
    };
};

export const drawCard = (name: string, num: number) => {
    const player: Player = { name, id: '1', isOwner: true };
    return {
        type: DRAW_CARD,
        payload: { player, num },
    };
};

export const joinRoom = ({ players, maxPlayers, code, name }: NewGameInitWithName) => {
    return {
        type: JOIN_ROOM,
        payload: { players, maxPlayers, code, name },
    };
};

export const updateGameState = (state: GameState) => {
    return {
        type: UPDATE_GAME_STATE,
        payload: state,
    };
};
