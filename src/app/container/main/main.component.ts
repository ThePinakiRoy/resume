import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
  items; 
  pageOfItems: Array < any > ;
  loading=false;
  constructor( private rest:RestService) { 
     this.rest.getJSON().subscribe(data=>{
       this.items=data['portfolio'];
      this.loading=true;
     console.log('items',this.items)
    });
    // (this.loading)?console.log('items',this.items):console.log('loading') 
   }

  ngOnInit() {
  }

}
