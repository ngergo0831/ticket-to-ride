import { MenuState, PlayerCount } from "../types";

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

export const getWagonDeck = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.wagonCards;

export const getShortDeck = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.shortDestinationCards;

export const getLongDeck = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.longDestinationCards;

export const getCurrentPlayer = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.currentPlayer;

export const getUserWagons = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.players.find(
        (element) => element.id === menuStateReducer.currentPlayer?.id
    )?.wagonCards;

export const getOnFieldCards = ({ menuStateReducer }: MenuState) =>
    menuStateReducer.onFieldWagonCards;
