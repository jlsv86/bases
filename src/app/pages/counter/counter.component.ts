import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: "./counter.component.html",
    styleUrls: ["./counter.component.css"],
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
    counter = 0;
    counterSignal = signal(10);

    constructor() {
        /*
        setInterval(() => {
            this.counterSignal.update((currentValue) => currentValue + 1);
            console.log('Tick');
        }, 2000);
        */
    }
    
    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((currentValue) => currentValue + value);
    }

    decreaseBy(value: number) {
        this.counter -= value;
        this.counterSignal.update((currentValue) => currentValue - value);
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}
