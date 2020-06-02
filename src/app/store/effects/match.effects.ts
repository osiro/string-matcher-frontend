import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StringMatchService } from 'src/app/services/string-match.services';
import { MatchesActions } from '../actions/action-types';
import { concatMap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/matches.reducers';
import * as matchSelectors from '../selectors/matches.selectors';

@Injectable()
export class MatchEffects {
    constructor(
        private store$: Store<State>,
        private actions$: Actions,
        private matcherService: StringMatchService) { }

    getMatches$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(MatchesActions.getMatches),
                withLatestFrom(this.store$.select(matchSelectors.getText), this.store$.select(matchSelectors.getSubtext)),
                switchMap(([action, text, subtext]) => this.matcherService.getMatches(text, subtext)),
                map(matchResponse => MatchesActions.loadMatches({ matchResponse }))
            )
    );
}
