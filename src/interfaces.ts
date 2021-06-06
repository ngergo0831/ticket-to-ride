import { GameState, Player } from "./types";

export interface ModifyPlayerCount {
    type: string;
    payload: number;
}

export interface ModifyPlayerName {
    type: string;
    payload: string;
}

export interface InitType {
    player: Player;
    num: number;
    code: string;
}

export interface NewGameInit {
    name: string;
    roomsize: number;
    roomcode: string;
}

export interface NewGameInitWithName {
    players: Player[];
    name: string;
    maxPlayers: number;
    code: string;
}

export type NEW_GAME = {
    type: string;
    payload: InitType;
};

export type JOIN_ROOM_TYPE = {
    type: string;
    payload: NewGameInitWithName;
};

export type UPDATE_GAME_STATE_TYPE = {
    type: string;
    payload: GameState;
}

export type USER_BEGIN = {
    type: string;
    payload: GameState;
};

export interface DRAW_CARDS {
    type: string;
    payload: GameState;
}

export interface BUILD_LINE {
    type: string;
    payload: GameState;
}

export interface NEW_DESTINATIONS {
    type: string;
    payload: GameState;
}
