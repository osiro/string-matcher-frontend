import * as fromMatches from '../reducers/matches.reducers';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface State {
    [fromMatches.matchesReducerFeatureKey]: fromMatches.State
}

export const reducers = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
    factory: () => ({
        [fromMatches.matchesReducerFeatureKey]: fromMatches.reducer
    })
});

export const metaReducers: MetaReducer<State>[] = !environment.production? [] : [];
