import { createAction, props } from "@ngrx/store";
import { Comment } from "../../models";

export const GET_COMMENTS_BY_ID_MOVIE = createAction("[Comment] Get_Comments_By_Id_Movie",props<{ movieId: number }>());

export const GET_COMMENTS_BY_ID_MOVIE_SUCCESS = createAction(
  "[Comment] Get_Comments_By_Id_Movie_Success",
  props<{ comments: Comment[] }>()
);

export const GET_COMMENTS_BY_ID_MOVIE_ERROR = createAction(
  "[Comment] Get_Comments_By_Id_Movie_Error",
  props<{ error: string }>()
);


