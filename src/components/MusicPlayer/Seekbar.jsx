import React from 'react';
import {TbPlayerTrackPrev, TbPlayerTrackNext} from 'react-icons/tb';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
       <TbPlayerTrackPrev size={20} color="#FFF" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white"/>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <TbPlayerTrackNext size={20} color="#FFF" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:ml-4 lg:block text-white"/>
    </div>
  );
};

export default Seekbar;
