type PlayerProp = {
    name?: string;
    vagons?: number;
    card1?: number;
    card2?: number;
    card3?: number;
    key?: number;
};

function Player({
    name = "Player",
    vagons = 45,
    card1 = 10,
    card2 = 4,
    card3 = 1,
}: PlayerProp) {
    return (
        <div className="player-title-box">
            <div className="player-title">{name}</div>
            <div className="player-title__flex">
                <div className="player-title__vagons">{vagons}</div>
                <div className="player-title__card1">{card2}</div>
                <div className="player-title__card2">{card1}</div>
                <div className="player-title__card2">{card3}</div>
            </div>
        </div>
    );
}

export default Player;
