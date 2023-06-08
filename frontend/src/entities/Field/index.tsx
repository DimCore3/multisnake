import { useLayoutEffect, useState } from 'react';
import { Pixel } from './model';
import classes from './styles/index.module.scss';
import { InitialSetYXRows, getRandomYX, setSquireValue } from './helpers';
import { Food } from 'shared';

const Field = ({ YXSize }: { YXSize: number }) => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [YXRows, setYXRows] = useState<Pixel[][]>(InitialSetYXRows(YXSize));

    function firstInit() {
        setSquireValue({ YXRows, setYXRows, ...getRandomYX(YXSize), user: 'none', food: true });
        setIsGameStarted(true);
    }

    useLayoutEffect(() => {
        if (!isGameStarted) {
            firstInit();
        }
    });

    return (
        <div className={classes.field}>
            {YXRows.map((yRow, yIndex) => (
                <div className={classes.yRow} style={{ width: `${100 / YXRows.length}%` }} key={'yRow_' + yIndex}>
                    {yRow.map((squire, index) => (
                        <div
                            className={classes.squire}
                            style={{ height: `calc(${100 / yRow.length}% - 2px)` }}
                            key={'xRow_' + yIndex + index}
                        >
                            {squire.food && <div className={classes.food}><Food /></div>}
                        </div>
                    ))}
                </div>
            ))}
        </div >
    );
}

export default Field;