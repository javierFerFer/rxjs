import { distinctUntilChanged, of } from "rxjs";


// It is used to emit values only if the next value has changes if it compared to the previous value emitted
of(1, 3, 1).pipe(
    distinctUntilChanged()
).subscribe(console.log)