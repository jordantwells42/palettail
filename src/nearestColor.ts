
import colorNameList from 'color-name-list';

// nearestColor need objects {name => hex} as input
const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
var nc = require('nearest-color').from(colors)

// get closest named color
export default function nearestColor(color: any){

    return nc(color.toHexString()).name
}