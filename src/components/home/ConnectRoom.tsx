import { FC } from "react";
import { useHistory } from "react-router-dom";

export const ConnectRoom: FC = () => {
    const history = useHistory();
    const handleSubmit = () => history.push("/awaiting");

    return (
        <form className="new-room" onSubmit={handleSubmit}>
            <div className="new-room-title">Csatlakozás a szobához</div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Becenév:
                </div>
                <input
                    type="text"
                    maxLength={14}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Szobakód:
                </div>
                <input
                    type="text"
                    maxLength={14}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button
                type="submit"
                className="home-btn edit new-room-input-items"
            >
                Csatlakozás
            </button>
        </form>
    );
};
