import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
   @Input() controlText: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('click');
  }

}
