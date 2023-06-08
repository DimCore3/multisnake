import { SetSquireValueType } from '../model';

export default function setSquireValue(props: SetSquireValueType) {    
    let result = JSON.parse(JSON.stringify(props.YXRows));
    result[props.y][props.x].user = props.user;
    result[props.y][props.x].food = props.food;
    props.setYXRows(result);
};