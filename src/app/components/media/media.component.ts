
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

import { Component } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { MediaService } from 'src/app/providers/media.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  products:Product[]=[];
  responsiveOptions:CarouselResponsiveOptions[]=[
    {breakpoint:'1400px',numVisible:2,numScroll:2},
    {breakpoint:'950px',numVisible:2,numScroll:1},
    {breakpoint:'550px',numVisible:1,numScroll:1}
  ]
  constructor(private mediaService:MediaService) {}
  ngOnInit():void{
    this.products=this.mediaService.getProductsData();
  }

  getSeverity(status: string) {
    if(status=='INSTOCK')
      return 'success';
    else if(status=='LOWSTOCK')
      return 'warning';
    else
      return 'danger';
  }

}
