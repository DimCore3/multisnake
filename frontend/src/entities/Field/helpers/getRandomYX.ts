export default function getRandomYX(value: number) {
    let y = Math.round(Math.random() * value);
    let x = Math.round(Math.random() * value);
    return { y, x };
}