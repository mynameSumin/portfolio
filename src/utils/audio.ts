export const globalAudio = new Audio();
globalAudio.loop = true;
globalAudio.volume = 0.5;

export const playAudio = (src: string) => {
  if (globalAudio.src !== src) {
    try {
      globalAudio.pause();
    } catch (e) {
      console.warn('pause error', e);
    }
    globalAudio.src = src;
  }

  globalAudio.load(); // src 바꾼 후 명시적으로 load
  globalAudio.currentTime = 0;

  // canplaythrough 이벤트로 play 타이밍 잡기
  globalAudio.addEventListener('canplaythrough', handlePlay, { once: true });

  function handlePlay() {
    globalAudio.play()
      .then(() => {
        console.log('audio play 성공');
      })
      .catch((error) => {
        console.error('audio play 실패', error);
      });
  }
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
