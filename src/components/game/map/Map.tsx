import "./map.css";
import map from "../../../res/map.png";
import { ticketToRideData } from "../../../res/ticket-to-ride-data";

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
    var ImgPos;
    ImgPos = FindPosition(myImg as any);
    // eslint-disable-next-line
    if (!e) var e: any = window.event;
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
    // eslint-disable-next-line
    Object.keys(ticketToRideData.cities).map((key, index) => {
        if (
            10.08 * ticketToRideData.cities[key as Numbers].x <= PosX + 30 &&
            10.08 * ticketToRideData.cities[key as Numbers].x >= PosX - 30 &&
            6.7358 * ticketToRideData.cities[key as Numbers].y <= PosY + 30 &&
            6.7358 * ticketToRideData.cities[key as Numbers].y >= PosY - 30
        ) {
            console.log(ticketToRideData.cities[key as Numbers].today as any);
        }
    });
}

function Map() {
    return (
        <div className="game-map">
            <img
                src={map}
                alt="map"
                className="map-img"
                id="map"
                onMouseDown={GetCoordinates}
            />
        </div>
    );
}

export default Map;
