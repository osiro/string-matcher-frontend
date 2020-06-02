import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatchesActions } from '../../store/actions/action-types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit() {
  }

  updateText(text: string) {
    this.store.dispatch(MatchesActions.updateText({ text }));
  }

  updateSubtext(subtext: string) {
    this.store.dispatch(MatchesActions.updateSubtext({ subtext }));
  }

  findMatches() {
    this.store.dispatch(MatchesActions.getMatches());
  }
}
