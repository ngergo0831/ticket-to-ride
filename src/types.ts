import {
    BUILD_LINE,
    DRAW_CARDS,
    JOIN_ROOM_TYPE,
    ModifyPlayerCount,
    NEW_DESTINATIONS,
    NEW_GAME,
    UPDATE_GAME_STATE_TYPE,
    USER_BEGIN,
} from "./interfaces";

export type WagonCard = { color: string };

export type DestinationCard = {
    id: string;
    from: string;
    to: string;
    fromCity: string;
    toCity: string;
    value: string;
};

export enum PlayerStatus {
    BEGIN,
    DRAW1,
    END,
}

export type Player = {
    name: string;
    id: string;
    isOwner: boolean;
    shortDestCards?: DestinationCard[];
    longDestCards?: DestinationCard[];
    wagonCards?: WagonCard[];
    points?: number;
    wagons?: number;
    round?: number;
    status?: PlayerStatus;
};

export const examplePlayer = {
    name: "",
    id: 0,
    isOwner: false,
};

export type GameState = {
    players: Player[];
    currentPlayer?: Player;
    shortDestinationCards?: DestinationCard[];
    longDestinationCards?: DestinationCard[];
    wagonCards?: WagonCard[];
    onFieldWagonCards?: WagonCard[];
    winner: Player | null;
    gameStatus: Status;
    maxPlayers: number;
    code: string;
};

export enum Status {
    MAIN_PAGE = "Main page",
    WAITING_FOR_PLAYERS = "Waiting for players",
    IN_GAME = "In game",
}

export const initialGameState: GameState = {
    players: [],
    winner: null,
    gameStatus: Status.MAIN_PAGE,
    maxPlayers: 5,
    code: "",
};

export type MenuState = {
    menuStateReducer: GameState;
    playerNameReducer?: string;
};

export type PlayerCount = {
    playerCountReducer: number;
};

export type PlayerName = {
    playerNameReducer: string;
};

export type END_GAME = DRAW_CARDS | BUILD_LINE | NEW_DESTINATIONS;

export type MenuActions =
    | ModifyPlayerCount
    | NEW_GAME
    | JOIN_ROOM_TYPE
    | UPDATE_GAME_STATE_TYPE;

export type GameActions = USER_BEGIN | END_GAME;
