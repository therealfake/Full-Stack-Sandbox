import _ from 'lodash';
import myName from './myName';

function component() {
    // const element1 = document.createElement('div');
    const element2 = document.createElement('div');

    //Lodash, now imported by this script
    // element1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element2.textContent = myName('Tianji');
    
    return element2;
}
document.body.appendChild(component());