import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personcardtwo',
  templateUrl: './personcardtwo.component.html',
  styleUrls: ['./personcardtwo.component.scss'],
})
export class PersoncardtwoComponent implements OnInit {

  @Input() member: any;

  ngOnInit() {
  }

}
