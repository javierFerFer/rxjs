import { delay, EMPTY, empty, interval, of, switchMap, takeUntil } from 'rxjs';


// switchmap is used to transform observable data into new observable (cancell previous value)
const obs = of(1, 2, 3, 4, 5).pipe(
    switchMap((x) => {
        return (x % 2 === 0) ? of(x) : EMPTY
    })
)
    .subscribe(console.log);


