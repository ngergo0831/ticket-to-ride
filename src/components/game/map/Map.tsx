import "./map.css";
import map from "../../../res/map.png";
import { ticketToRideData } from "../../../res/ticket-to-ride-data";
import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";

type Numbers =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40"
    | "41"
    | "42"
    | "43"
    | "44"
    | "45"
    | "46"
    | "47";

function Map() {
    const [isMarked, setMarked] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function FindPosition(oElement: any) {
        if (typeof oElement.offsetParent != "undefined") {
            for (
                var posX = 0, posY = 0;
                oElement;
                oElement = oElement.offsetParent
            ) {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            return [posX, posY];
        } else {
            return [oElement.x, oElement.y];
        }
    }

    function GetCoordinates(e: any) {
        let myImg = document.getElementById("map");
        var PosX = 0;
        var PosY = 0;
        var ImgPos: any;
        ImgPos = FindPosition(myImg as any);
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            PosX = e.pageX;
            PosY = e.pageY;
        } else if (e.clientX || e.clientY) {
            PosX =
                e.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft;
            PosY =
                e.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        PosX = PosX - ImgPos[0];
        PosY = PosY - ImgPos[1];
        console.log("PosX: " + PosX);
        console.log("PosY: " + PosY);
        Object.keys(ticketToRideData.cities).forEach((key) => {
            if (
                10.352941176 * ticketToRideData.cities[key as Numbers].x <=
                    PosX + 30 &&
                10.352941176 * ticketToRideData.cities[key as Numbers].x >=
                    PosX - 30 &&
                6.864969325 * ticketToRideData.cities[key as Numbers].y <=
                    PosY + 30 &&
                6.864969325 * ticketToRideData.cities[key as Numbers].y >=
                    PosY - 30
            ) {
                setX(
                    10.352941176 * ticketToRideData.cities[key as Numbers].x +
                        462
                );
                setY(
                    6.864969325 * ticketToRideData.cities[key as Numbers].y + 4
                );
                console.log(
                    ticketToRideData.cities[key as Numbers].today as any
                );
                setMarked(!isMarked);
            }
        });
    }

    return (
        <div className="game-map">
            <img
                src={map}
                alt="map"
                className="map-img"
                id="map"
                onMouseDown={GetCoordinates}
            />
            {isMarked ? (
                <div
                    className="point"
                    style={{ top: y + "px", left: x + "px" }}
                    onClick={GetCoordinates}
                >
                    <BsCircleFill />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Map;
