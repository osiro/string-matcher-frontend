export interface Matches {
    positions: number[];
}

export interface MatchResponse {
    type: string;
    attributes: Matches;
}
