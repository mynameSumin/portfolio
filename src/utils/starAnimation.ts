interface Stars {
    x: string;
    y: string;
}

export const generateStars = (count: number): Stars[] => {
    const stars: Stars[] = [];
  
    for (let i = 0; i < count; i++) {
      stars.push({
        x: `50%`,
        y: `50%`,
      });
    }
  
    return stars;
  };