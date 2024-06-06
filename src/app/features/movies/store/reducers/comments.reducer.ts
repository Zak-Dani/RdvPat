import { Comment } from "../../models";
import { Action, createReducer, on } from "@ngrx/store";
import * as commentsAction from "../actions";

export interface commentsState {
    comments: Comment[];
    loading: boolean;
    error: string;
}

const initCommentsState:commentsState= {
    comments: [],
    loading: false,
    error: ""
};

const reducerComments = createReducer (
    initCommentsState,
    on(commentsAction.GET_COMMENTS_BY_ID_MOVIE, (state,{ movieId }) => {
        return {...state, loading: true}
    }),
    on (commentsAction.GET_COMMENTS_BY_ID_MOVIE_SUCCESS, (state, {comments})=> {
        return {...state, comments: comments, loading: false}
    }),
    on (commentsAction.GET_COMMENTS_BY_ID_MOVIE_ERROR, (state, {error})=> {
        return {...state, loading: false, error: error}
    })
)

export function commentsReducer (
    state: commentsState | undefined,
    action: Action
) {
    return reducerComments (state, action)
}

export const getAllComments = (state: commentsState): Comment [] => state.comments;
export const getIsCommentsLoading = (state: commentsState): boolean => state.loading;
export const getIsErrorLoadComments = (state: commentsState): string => state.error;