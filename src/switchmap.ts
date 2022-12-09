import { of, switchMap, timer } from "rxjs";


// switch is like merge, but if new value is emmited, the previous will be unsuscribe
// If you running this, the timer is not emmited because the next value will be emmited immediately
of(1, 2, 3)
    .pipe(
        switchMap(val => (val % 2 === 0) ? timer(4000) : of(val))
    )
    .subscribe(console.log)


