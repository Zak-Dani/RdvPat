import {Component, OnInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as actionsType from '../../store/actions';
import {Store} from '@ngrx/store';
import {ElementsState} from '../../store/reducers';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit, OnDestroy {
  collapsedNav: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private store: Store<ElementsState>) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit(): void {
    console.log("appel back........")
    this.store.dispatch(actionsType.GET_CATEGORIES());
    this.store.dispatch(actionsType.GET_MOVIES());

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
