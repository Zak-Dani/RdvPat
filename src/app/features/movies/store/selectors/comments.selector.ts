import { from } from "rxjs";
import {createSelector} from "@ngrx/store";
import {ElementsState} from "../reducers";
import * as commentsReduccer from "../reducers/comments.reducer";
import {getElementsState} from "./elements.selector";

const getCommentsState = createSelector (getElementsState, (state: ElementsState) => state.comments);

export const getAllComments = createSelector (getCommentsState, commentsReduccer.getAllComments);

export const getIsCommentsLoading = createSelector (getCommentsState, commentsReduccer.getIsCommentsLoading);

export const getIsErrorLoadComments = createSelector (getCommentsState, commentsReduccer.getIsErrorLoadComments);
