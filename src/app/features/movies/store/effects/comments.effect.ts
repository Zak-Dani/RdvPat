import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { of, Observable } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as commentsActions from "../actions";
import { MoviesService } from "../../services/movies.service";
import { Comment } from "../../models";
@Injectable()
export class CommentsEffect {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadCommentsByIdMovie$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(commentsActions.GET_COMMENTS_BY_ID_MOVIE),
      mergeMap((data) =>
        this.moviesService.getCommentsByIdMovie(data.movieId).pipe(
          map(
            (comments: Comment[]) => (
              commentsActions.GET_COMMENTS_BY_ID_MOVIE_SUCCESS({
                comments: comments,
              })
            )
          ),
          catchError((err) =>
            of(
              commentsActions.GET_COMMENTS_BY_ID_MOVIE_ERROR({
                error: err.error.message,
              })
            )
          )
        )
      )
    )
  );
}
