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
    this.text$ = this.store.select(matchesSelectors.getText);
    this.subtext$ = this.store.select(matchesSelectors.getSubtext);
    this.matches$ = this.store.select(matchesSelectors.getMatches);
  }

  hasResults$(): Observable<boolean> {
    return this.matches$.pipe(
      map((matches) => {
        return matches.length > 0;
      })
    );
  }

  hasText$(): Observable<boolean> {
    return this.text$.pipe(
      map((text) => {
        return text.length > 0;
      })
    );
  }

  hasSubtext$(): Observable<boolean> {
    return this.subtext$.pipe(
      map((subtext) => {
        return subtext.length > 0;
      })
    );
  }
}
