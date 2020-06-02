import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as matchesSelectors from '../../store/selectors/matches.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {
  matches$: Observable<number[]>;
  subtext$: Observable<string>;
  text$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.matches$ = this.store.select(matchesSelectors.getMatches);
  }

  hasResults$(): Observable<boolean> {
    return this.matches$.pipe(
      map((matches) => {
        return matches.length > 0;
      })
    );
  }
}
