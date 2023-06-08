import { useState } from 'react';
import { Pixel } from './model';
import classes from './styles/index.module.scss';
import { InitialSetYXRows } from './helpers';

const Field = () => {
    const [YXRows, setYXRows] = useState<Pixel[][]>(InitialSetYXRows(50))

    return (
        <div className={classes.field}>
            {YXRows.map((yRow, index) => (
                <div className={classes.yRow} style={{ width: `${100 / YXRows.length}%` }} key={'yRow_' + index}>
                    {yRow.map((squire, index) => (
                        <div className={classes.squire} style={{ height: `calc(${100 / yRow.length}% - 2px)` }} key={'xRow_' + index} />
                    ))}
                </div>
            ))
            }
        </div >
    );
}

export default Field;