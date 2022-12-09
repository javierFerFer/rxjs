import { filter, of } from "rxjs";

// It is used to filter streaming data
const obs = of(1, 2, 3).pipe(
    filter(x => x % 2 === 0)
);

obs.subscribe(x => console.log(x));