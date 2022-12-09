import { mergeMap, of, timer } from "rxjs";

of(1, 2, 3)
    .pipe(
        mergeMap(val => (val % 2 === 0) ? timer(5000) : of(val))
    )
    .subscribe(console.log)