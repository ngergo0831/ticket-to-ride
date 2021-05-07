import { InitType, ModifyPlayerCount } from "../interfaces";
import { ticketToRideData } from "../res/ticket-to-ride-data";
import {
    DestinationCard,
    initialGameState,
    MenuActions,
    Player,
    Status,
    WagonCard,
} from "../types";
import { MODIFY_PLAYER_COUNT, NEW_GAME, GAME_STARTED } from "./actions";

export const playerCountReducer = (state = 1, action: ModifyPlayerCount) => {
    const { type, payload } = action;

    if (type === MODIFY_PLAYER_COUNT) {
        return state + (payload as number);
    }

    return state;
};
/*
export const gameStateReducer = (
    state = initialGameState,
    action: GameActions
) => {
    const { type, payload } = action;

    return state;
};*/

export const menuStateReducer = (
    state = initialGameState,
    action: MenuActions
) => {
    const { type, payload } = action;

    if (type === NEW_GAME) {
        const { player, num } = payload as InitType;
        const newState = initialGameState;
        let owner: Player = player;
        newState.players.length = 0;
        newState.players.push(owner);
        newState.currentPlayer = owner;
        newState.gameStatus = Status.WAITING_FOR_PLAYERS;
        newState.maxPlayers = num;
        newState.code = Math.random().toString(36).substring(7);
        return newState;
    }
    if (type === GAME_STARTED) {
        state.wagonCards = generateWagonCards();
        state.shortDestinationCards = generateShortDestinationCards();
        state.longDestinationCards = generateLongDestinationCards();
        state.players.forEach((element) => {
            element.wagonCards = [];
            if (state.wagonCards)
                for (let i = 0; i < 4; i++)
                    element.wagonCards.push(
                        JSON.parse(JSON.stringify(state.wagonCards[i]))
                    );
            state.wagonCards = state.wagonCards?.slice(
                4,
                state.wagonCards.length
            );
            element.shortDestCards = [];
            if (state.shortDestinationCards)
                for (let i = 0; i < 5; i++)
                    element.shortDestCards.push(state.shortDestinationCards[i]);
            state.shortDestinationCards = state.shortDestinationCards?.slice(
                5,
                state.shortDestinationCards.length
            );
            element.longDestCards = [];
            if (state.longDestinationCards)
                element.longDestCards.push(state.longDestinationCards[0]);
            state.longDestinationCards = state.longDestinationCards?.slice(
                1,
                state.longDestinationCards.length
            );
            element.wagons = 45;
            element.points = 0;
        });
        state.gameStatus = Status.IN_GAME;
        return state;
    }

    return state;
};

function generateWagonCards(): WagonCard[] {
    let deck: WagonCard[] = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
            if (i === 0) deck.push({ color: "purple" });
            else if (i === 1) deck.push({ color: "white" });
            else if (i === 2) deck.push({ color: "blue" });
            else if (i === 3) deck.push({ color: "yellow" });
            else if (i === 4) deck.push({ color: "orange" });
            else if (i === 5) deck.push({ color: "black" });
            else if (i === 6) deck.push({ color: "red" });
            else if (i === 7) deck.push({ color: "green" });
        }
    }
    for (let i = 0; i < 14; i++) {
        deck.push({ color: "wagon" });
    }
    deck = deck
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return deck;
}

function generateShortDestinationCards(): DestinationCard[] {
    let deck: DestinationCard[] = [];
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(ticketToRideData.destinations)) {
        deck.push(value);
    }
    deck = deck
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return deck;
}

function generateLongDestinationCards(): DestinationCard[] {
    let deck: DestinationCard[] = [];
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(
        ticketToRideData.longDestinations
    )) {
        deck.push(value);
    }
    deck = deck
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return deck;
}
