import { Component, OnInit } from '@angular/core';
import { WrapperserviceService } from './service';
import { mymodel    } from './model';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css']
})
export class ListWrapperComponent implements OnInit {
  _mymodel: mymodel[];
  constructor(private _wrapservice: WrapperserviceService) { }

  ngOnInit() {
    this._wrapservice.getall().subscribe(data => {
       this._mymodel = data;
    });

  }

}