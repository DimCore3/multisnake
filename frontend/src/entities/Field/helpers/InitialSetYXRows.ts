import { Pixel } from '../model';

export default function InitialSetYXRows(XYSize: number): Pixel[][] {
    let YXRows: Pixel[][] = [];

    for (let i = 0; i < XYSize; i++) {
        let YRow: Pixel[] = [];
        
        for (let i = 0; i < XYSize; i++) {
            YRow.push({ user: 'none', food: false })
        }
        YXRows.push(YRow);
    };
    return YXRows;
}