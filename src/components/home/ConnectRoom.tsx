import React from "react";

function ConnectRoom() {
    const connectRoom = () => {};
    return (
        <form className="new-room" onSubmit={connectRoom}>
            <div className="new-room-title">Csatlakozás a szobához</div>
            <div>
                Becenév: <input type="text" className="home-input edit"></input>
            </div>
            <div>
                Szobakód:{" "}
                <input type="text" className="home-input edit"></input>
            </div>
            <button type="submit" className="home-btn edit">
                Csatlakozás
            </button>
        </form>
    );
}

export default ConnectRoom;
