import React, { useEffect, useMemo, useState } from "react";
import s from "./Bar.module.scss";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
const VideoBar = ({ duration, playingSeconds, setTime, ...props }) => {
    const [slider, setSlider] = useState(null);

    useMemo(() => {
        if (slider) {
            slider.noUiSlider.set([null, playingSeconds]);
        }
    }, [playingSeconds]);
    useEffect(() => {
        if (slider) {
            slider.noUiSlider.disable(0);
        }
    }, [slider]);
    return (
        <div className={s.bar}>
            <span className={s.loaded} style={{ width: "20%" }}></span>
            <Nouislider
                instanceRef={(instance) => {
                    if (instance && !slider) {
                        setSlider(instance);
                    }
                }}
                onChange={(e) => setTime(Math.round(e[1]))}
                id={s.playedId}
                range={{ min: 0, max: duration }}
                start={[0, 0]}
                connect
            />
        </div>
    );
};

export default VideoBar;
