import { GameState, Player } from "./types";

export interface ModifyPlayerCount {
    type: string;
    payload: number;
}

export interface InitType{
    player: Player;
    num: number;
}

export type NEW_GAME = {
    type: string;
    payload: InitType;
};

export type USER_BEGIN = {
    type: string;
    payload: GameState;
}

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
