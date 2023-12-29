import React, { useEffect, useMemo, useState } from "react";
import play from "../..//img/icons/play.svg";
import volumeIcon from "../../img/icons/volume.svg";
import fullscreen from "../../img/icons/fullscreen.png";

import VideoBar from "../UI/Bar/VideoBar";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import s from "./VideoControls.module.scss";

const VideoControls = ({
    playingSeconds,
    isOnce,
    playVideo,
    duration,
    setTime,
    setVolume,
    volume,
    ...props
}) => {
    const [slider, setSlider] = useState(null);

    return (
        <div className={s.controls}>
            <button onClick={playVideo} className={s.play}>
                {isOnce || <img src={play} />}
            </button>

            <p>{playingSeconds}</p>
            <VideoBar
                duration={duration}
                playingSeconds={playingSeconds}
                setTime={setTime}
            />
            <div className={s.controls__bottom}>
                <button className={s.play_second}>Play</button>
                <button id={s.volume}>
                    <img src={volumeIcon} />
                    <Nouislider
                        instanceRef={(instance) => {
                            if (instance && !slider) {
                                setSlider(instance);
                            }
                        }}
                        onSlide={(e) => setVolume(+e[1])}
                        behaviour="none"
                        range={{ min: 0, max: 1 }}
                        start={[0, 0.5]}
                        connect
                    />
                </button>
                <button className={s.fullscreen}>
                    <img src={fullscreen} />
                </button>
            </div>
        </div>
    );
};

export default VideoControls;
