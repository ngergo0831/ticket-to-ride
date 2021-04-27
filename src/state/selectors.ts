import { GameState, MenuState, PlayerCount } from "../types";

export const countPlayers = ({ playerCountReducer }: PlayerCount) =>
    playerCountReducer;

export const getPlayers = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.players;
export const getWinner = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.winner;
export const getGameStatus = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.gameStatus;
export const getMaxPlayers = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.maxPlayers;
export const getRoomCode = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.code;
