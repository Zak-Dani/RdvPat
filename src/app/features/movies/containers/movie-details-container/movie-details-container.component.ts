import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ElementsState } from "../../store/reducers";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Movie, Comment } from "../../models";
import * as selectors from "../../store/selectors";
import * as actionsType from "../../store/actions";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-movie-details-container",
  templateUrl: "./movie-details-container.component.html",
  styleUrls: ["./movie-details-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsContainerComponent implements OnInit {
  movie$: Observable<Movie>;
  loadingCategories$: Observable<boolean>;
  loadingMovies$: Observable<boolean>;
  loadingAddOrDeleteMovieToMycollection$: Observable<boolean>;
  form: FormGroup;
  comments$: Observable<Comment[]>;
  loadingComments$: Observable<boolean>;
  constructor(
    private store: Store<ElementsState>,
    private route: ActivatedRoute,
  ) {
    //this.moviesService.getCategoriesAndMoviesAfterRefreshPage();
  }

  ngOnInit(): void {
    this.movie$ = this.store.select<Movie>(selectors.getMovieById);
    this.loadingCategories$ = this.store.select<boolean>(
      selectors.getIsCategoriesLoading
    );
    this.loadingMovies$ = this.store.select<boolean>(
      selectors.getIsLoadingAllMovies
    );
    this.loadingAddOrDeleteMovieToMycollection$ = this.store.select<boolean>(
      selectors.getIsLoadingActionMovie
    );
    this.store.dispatch(actionsType.GET_COMMENTS_BY_ID_MOVIE({movieId : parseInt(this.route.snapshot.paramMap.get('movieId'))}));
    this.comments$ = this.store.select<Comment[]>(selectors.getAllComments);
    this.comments$.subscribe(data=>console.log(data));
    this.loadingComments$ = this.store.select<boolean>(selectors.getIsCommentsLoading);
    this.createForm();
  }

  OnAddOrDeleteToMyCollection(movieId: number) {
    this.store.dispatch(
      actionsType.ADD_OR_DELETE_MOVIE_COLLECTION({ movieId: movieId })
    );
  }
  private createForm() {
    this.form = new FormGroup({
      text: new FormControl('',Validators.maxLength(10)),
    });
  }

}
