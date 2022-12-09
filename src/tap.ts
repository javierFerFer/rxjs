import { of, tap } from 'rxjs';

// it is used do something with outside data
const obs = of(1, 2, 3).pipe(
    tap(x => console.log(x))
).subscribe();