import { createAction, props } from '@ngrx/store';
import { MatchResponse } from 'src/app/models/match.model';

export const updateText = createAction('[Matches] Update Text', props<{ text: string }>());
export const updateSubtext = createAction('[Matches] Update Subtext', props<{ subtext: string }>());
export const getMatches = createAction('[Matches Get Matches');
export const clearMatches = createAction('[Matches Clear Matches');
export const loadMatches = createAction('[Matches] Load Matches', props<{ matchResponse: MatchResponse }>());
