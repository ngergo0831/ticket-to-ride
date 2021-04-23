export type WagonCard = { color: string };

export type DestinationCard = {
    from: string;
    to: string;
    value: number;
};

export type Player = {
    name: string;
    id: number;
    destCards?: DestinationCard[];
    wagonCards?: WagonCard[];
    points?: number;
    wagons?: number;
    round?: number;
};

export type GameState = {
    players: Player[];
    winner: Player | null;
    gameStatus: Status;
};

export enum Status {
    NotStarted = "Not Started",
    InProgress = "In Progress",
    Finished = "Finished",
}

export const initialGameState: GameState = {
    players: [],
    winner: null,
    gameStatus: Status.NotStarted
}
