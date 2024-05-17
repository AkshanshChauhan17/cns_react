import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({audio_url, audio_script}) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener('timeupdate', updateTime);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  // Define your text cues here
//   const textCues = [
//     { time: 5, text: 'This is the first cue at 5 seconds' },
//     { time: 10, text: 'This is the second cue at 10 seconds' },
//     // Add more cues as needed
//   ];

    const textCues = audio_script;

  const getCurrentCue = () => {
    return textCues.find(cue => cue.time <= currentTime);
  };

  const currentCue = getCurrentCue();

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={audio_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {currentCue && <div>{currentCue.text}</div>}
    </div>
  );
};

export default AudioPlayer;