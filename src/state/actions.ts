import { Player } from "../types";

export const UPDATE_PLAYERS = "UPDATE_PLAYERS";
export const MODIFY_PLAYER_COUNT = "MODIFY_PLAYER_COUNT";

export const updatePlayers = (player: Player) => ({
    type: UPDATE_PLAYERS,
    payload: player,
});

export const modifyPlayerCount = (num: number) => ({
    type: MODIFY_PLAYER_COUNT,
    payload: num,
});

export interface ModifyPlayerCount {
    type: string;
    payload: number;
}

export type MenuActions = ModifyPlayerCount;
