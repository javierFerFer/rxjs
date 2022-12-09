import { concatMap, of } from 'rxjs';
import fetch from "node-fetch";


// allow to concat sequentialy observables when emit values
// for example, for http requests
of(1, 2, 3)
    .pipe(
        concatMap(val => fetch("https://pokeapi.co/api/v2/pokemon"))
    )
    .subscribe(console.log)

    // This print the result of fetch request