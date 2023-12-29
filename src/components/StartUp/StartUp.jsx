import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import play from "../..//img/icons/play.svg";
import cover from "../../img/main.jpg";
import mainVideo from "../../videos/interstellar.mp4";

import s from "./StartUp.module.scss";
import Button from "../UI/button/Button";
import VideoControls from "../VideoControls/VideoControls";

const StartUp = () => {
    const video = useRef();
    const [duration, setDuration] = useState(0.1);
    const [playingSeconds, setPlayingSeconds] = useState(0);

    const [volume, setVolume] = useState(0.3);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isOnce, setIsOnce] = useState(false);

    function playVideo() {
        if (!isOnce) setIsOnce(true);
        setIsPlaying(!isPlaying);
        const duration = video.current.getDuration();

        setDuration(duration);
    }

    function setTime(time) {
        video.current.seekTo(time);
        setPlayingSeconds(time);
    }
    function onProgress() {
        setPlayingSeconds(Math.floor(video.current.getCurrentTime()));
    }

    return (
        <div>
            <div className="_container">
                <h1>Landing template for startups</h1>
                <p>
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                </p>
                <div>
                    <Button>Start free trial</Button>
                    <Button>Learn more</Button>
                </div>
                <div className={s.video}>
                    <ReactPlayer
                        playing={isPlaying}
                        ref={video}
                        url={mainVideo}
                        width={"100%"}
                        onProgress={onProgress}
                        volume={volume}
                    />
                    <VideoControls
                        isOnce={isOnce}
                        playVideo={playVideo}
                        playingSeconds={playingSeconds}
                        duration={duration}
                        setTime={setTime}
                        setVolume={setVolume}
                        volume={volume}
                    />
                </div>
            </div>
        </div>
    );
};

export default StartUp;
