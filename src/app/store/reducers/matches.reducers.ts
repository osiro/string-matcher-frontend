import { createReducer, on, Action } from '@ngrx/store';
import { MatchesActions } from '../actions/action-types';
import { MatchResponse } from 'src/app/models/match.model';

export const matchesReducerFeatureKey = 'matches-feature-key';

export interface State {
    text: string;
    subtext: string;
    matches: number[];
}

export const initialState = {
    text: '',
    subtext: '',
    matches: []
}

export const reducers = createReducer(
    initialState,
    on(MatchesActions.updateText, (state, action) => ({ ...state, text: action.text })),
    on(MatchesActions.updateSubtext, (state, action) => ({ ...state, subtext: action.subtext })),
    on(MatchesActions.loadMatches, (state, action) => ({ ...state, matches: handleMatchResponse(action.matchResponse) })),
    on(MatchesActions.clearMatches, (state) => ({ ...state, matches: [] }))
)

export function reducer(state: State | undefined, action: Action) {
    return reducers(state, action);
}

const handleMatchResponse = (response: MatchResponse) : number[] => {
    return response.attributes.positions;
}

export const getMatches = (state: State) => state.matches;
export const getText = (state: State) => state.text;
export const getSubtext = (state: State) => state.subtext;
