import { Field } from "entities/index";
import classes from './styles/index.module.scss'

const Playground = () => {

    return (
        <div className={classes.playground}>
            <Field YXSize={40}/>
        </div>
    );
}

export default Playground;