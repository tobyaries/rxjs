import { fromEvent } from 'rxjs';

class RxJSDemo {
    subscribe() {
        const button = document.querySelector('button');
        fromEvent(button, 'click')
          .subscribe(() => console.log('Clicked!'));
    }
}

export default RxJSDemo;