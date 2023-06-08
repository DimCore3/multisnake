import { Field } from "entities/index";
import { Pixel } from './model';
import classes from './styles/index.module.scss'

const Playground = () => {
    let YXRows: Pixel[][] = [
        [
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
        ],
        [
            {
                user: 1,
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 1,
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
        ],
        [
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
        ],
        [
            {
                user: 1,
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
            {
                user: 1,
                food: false,
            },
            {
                user: 'none',
                food: false,
            },
        ],
    ]

    return (
        <div className={classes.playground}>
            <Field YXRows={YXRows} />
        </div>
    );
}

export default Playground;