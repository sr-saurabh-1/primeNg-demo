import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebarList:MenuItem[]=[];

  ngOnInit():void{

    this.sidebarList=[
      {
        label:'Dashboard',
        icon: 'pi pi-fw pi-home',
      },
      {
        label:'Question Bank',
        icon: 'pi pi-fw pi-video',
      },
      {
        label:'Question Papers',
        icon: 'pi pi-fw pi-video',
      },
      {
        label:'Evevnt',
        icon: 'pi pi-fw pi-video',
      },
      {
        label:'Profile',
        icon: 'pi pi-fw pi-video',
      },
      {
        label:'Recruters',
        icon: 'pi pi-fw pi-video',
      },
      {
        label:'Job Roles',
        icon: 'pi pi-fw pi-video',
      },
    ]
  }
}
