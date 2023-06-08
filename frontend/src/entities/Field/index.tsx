import { Pixel } from './model';
import classes from './styles/index.module.scss';

const Field = ({ YXRows }: { YXRows: Pixel[][] }) => {
    return (
        <div className={classes.field}>
            {YXRows.map((yRow, index) => (
                <div className={classes.yRow} style={{ width: `${100 / YXRows.length}%` }} key={'yRow_' + index}>
                    {yRow.map((xRow, index) => (
                        <div className={classes.squire} style={{ height: `${100 / yRow.length}%` }} key={'xRow_' + index}>
                            {xRow.user}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Field;