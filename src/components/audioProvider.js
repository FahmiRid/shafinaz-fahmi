// src/context/AudioContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Howl } from 'howler';
import Penjaga from '../components/song/penjaga1.mp3';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize Howl
    const howlSound = new Howl({
      src: [Penjaga],
      autoplay: true,
      loop: true,
      volume: 0.1,
      onend: function() {
        console.log('Finished!');
      }
    });

    setSound(howlSound);
    setIsPlaying(true);

    // Cleanup on unmount
    return () => {
      if (howlSound) {
        howlSound.stop();
      }
    };
  }, []);

  const toggleMute = () => {
    if (sound) {
      if (isMuted) {
        sound.volume(0.1);
      } else {
        sound.volume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, isPlaying, toggleMute, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook to use the audio context
export const useAudio = () => useContext(AudioContext);