import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';

function component() {
    const element1 = document.createElement('div');
    // const element2 = document.createElement('div');

    //Lodash, now imported by this script
    element1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element1.classList.add('hello');

    // element2.textContent = myName('Tianji');
    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element1.appendChild(myIcon);

    return element1;
}
document.body.appendChild(component());