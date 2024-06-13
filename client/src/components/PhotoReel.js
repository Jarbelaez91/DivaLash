import React from "react";
import "./PhotoReel.css";
import reel1 from "./reel1.jpeg";
import reel2 from "./reel2.jpeg";
import reel3 from "./reel3.jpeg";
import reel4 from "./reel4.jpeg";
import reel5 from "./reel5.jpeg";
import reel6 from "./reel6.jpeg";
import reel7 from "./reel7.jpeg";
import reel8 from "./reel8.jpeg";
import reel9 from "./reel9.jpeg";
import reel10 from "./reel10.jpeg";
import reel11 from "./reel11.jpeg";
import reel12 from "./reel12.jpeg";
import reel13 from "./reel13.jpeg";
import reel14 from "./reel14.jpeg";
import reel15 from "./reel15.jpeg";
import reel16 from "./reel16.jpeg";
import reel17 from "./reel17.jpeg";
import diploma7 from "./diploma7.jpeg";
import lashStudio from "./lashStudio.jpeg";
import lashlights from "./lashlights.jpeg";
import lashworker from "./lashworker.jpeg";

const photos = [
    reel1, reel2, reel3, reel4, diploma7, reel5, lashStudio, reel6, reel7, reel8, reel9, reel10,
    reel11, lashlights, reel12, reel13, reel14, reel15, reel16, reel17, lashworker,
];

const PhotoReel = ({ darkModeEnabled }) => {
    return (
        <div className={`photo-reel-container ${darkModeEnabled ? "light-mode-photo-reel-container" : ""}`}>
            <div className="photo-reel">
                {photos.map((photo, index) => (
                    <div className={`photo-item-reel ${darkModeEnabled ? "light-mode-photo-item" : ""}`} key={index}>
                        <img src={photo} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoReel;
