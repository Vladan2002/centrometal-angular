import {Component, OnInit} from '@angular/core';
import {Product} from './products.interface';
import {OpenProductService} from '../../services/open-product.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-open-product',
  standalone:false,
  templateUrl: './open-product.component.html',
  styleUrl: './open-product.component.scss'
})
export class OpenProductComponent implements OnInit {
  public product!: Product;
  public loader: boolean = true;
  public id:number = -1;
  constructor(private openProductService: OpenProductService,private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  public ngOnInit() {

    setTimeout(()=>this.fetchData(),2000)

  }
  private fetchData(){
    this.openProductService.getData(this.id).subscribe(data=>{
      this.product = data;
      this.loader = false;
    })
  }
}
