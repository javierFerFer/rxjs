import { concat, of, timer } from 'rxjs';

const obs1 = timer(3000);

const obs2 = of(3);

// concat is sequential and is used to link observables
const result = concat(obs1, obs2);

result.subscribe(console.log)