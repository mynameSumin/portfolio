export const randomNumBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}