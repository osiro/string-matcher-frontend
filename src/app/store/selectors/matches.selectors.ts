import * as fromMatches from '../reducers/matches.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMatchesState = createFeatureSelector<fromMatches.State>(fromMatches.matchesReducerFeatureKey);
export const getMatches = createSelector(selectMatchesState, fromMatches.getMatches);
export const getText = createSelector(selectMatchesState, fromMatches.getText);
export const getSubtext = createSelector(selectMatchesState, fromMatches.getSubtext);

