import { concatMap, of } from 'rxjs';

const obs = of(1, 2, 3).pipe(
    concatMap(x => of(x + 1))
).subscribe(console.log)