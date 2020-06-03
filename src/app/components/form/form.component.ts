import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatchesActions } from '../../store/actions/action-types';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  private subtext = new Subject<string>();

  constructor(private store: Store) { }

  ngOnInit() {
    this.observeSubtext();
  }

  updateText(text: string) {
    this.store.dispatch(MatchesActions.updateText({ text }));
  }

  updateSubtext(subtext: string) {
    this.subtext.next(subtext);
    this.store.dispatch(MatchesActions.updateSubtext({ subtext }));
  }

  findMatches() {
    this.store.dispatch(MatchesActions.getMatches());
  }

  private observeSubtext() {
    this.subtext.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((subtext) => {
      if (subtext) {
        this.store.dispatch(MatchesActions.getMatches())
      }
      else {
        this.store.dispatch(MatchesActions.clearMatches()) 
      }
    });
  }
}
