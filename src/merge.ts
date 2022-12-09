import { merge, of, timer } from 'rxjs';


// merge is parallel and is used to link observables
const obs1 = timer(3000);

const obs2 = of(1, 2, 3);

const result = merge(obs1, obs2);
result.subscribe(console.log)