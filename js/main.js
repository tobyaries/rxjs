/*import Person from './Person.js';
import Monkey from './decorator.js';
import RxJSDemo from './RxJSDemo';

let p = new Person('韩信4', 18);
document.write(p.say());

let m = new Monkey();
m.sayName();

let r = new RxJSDemo();
r.subscribe();*/


import helloWorldGenerator from './Generator/helloWorldGenerator.js';

var hw = helloWorldGenerator();
hw.next()