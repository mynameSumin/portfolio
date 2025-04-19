export const globalAudio = new Audio();
globalAudio.loop = true;
globalAudio.volume = 0.5;

export const playAudio = (src: string) => {
    if (globalAudio.src !== src) {
      globalAudio.pause();
      globalAudio.src = src;
    }
    globalAudio.currentTime = 0;
    globalAudio.play();
  };
  
  export const stopAudio = () => {
    globalAudio.pause();
    globalAudio.currentTime = 0;
  };

  export const fadeOutAudio = (duration: number = 2000) => {
    const audio = globalAudio;
    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = audio.volume / steps;
  
    let currentStep = 0;
    const fade = setInterval(() => {
      currentStep++;
      audio.volume = Math.max(0, audio.volume - volumeStep);
      if (currentStep >= steps || audio.volume <= 0.01) {
        clearInterval(fade);
        audio.pause();
        audio.volume = 1;
      }
    }, stepTime);
  };
  
  