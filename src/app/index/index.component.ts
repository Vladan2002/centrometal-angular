import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  standalone:false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {

  ngOnInit(){
    window.scrollTo({top:0,behavior: 'smooth'});
  }

}
