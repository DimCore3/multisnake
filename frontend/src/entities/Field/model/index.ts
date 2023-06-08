export type Pixel = {
    user: number | 'none',
    food: boolean,
}

export type SetSquireValueType = {
    YXRows: Pixel[][],
    setYXRows: Function,
    y: number,
    x: number,
    user: number | 'none',
    food: boolean,
}
