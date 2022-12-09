import { exhaustMap, of, timer } from "rxjs";

// exhaustMap trigger first value in observable, then process inner observable
// during process of the inner observable, exhaustMap ignore the rest of the elements emitted by the
// high order observable
of(1, 2, 3)
    .pipe(
        exhaustMap(x => timer(3000))
    ).subscribe(console.log)