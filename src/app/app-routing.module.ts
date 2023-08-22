import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionbankComponent } from './components/questionbank/questionbank.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionformComponent } from './components/questionform/questionform.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelComponent } from './components/panel/panel.component';
import { MediaComponent } from './components/media/media.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
		path: '',
    redirectTo: '/sidebar', pathMatch: 'full'
    // redirectTo: '/dashboard', pathMatch: 'full'
	},
  {
		path: 'panel',
		component: PanelComponent,
		// data: { breadcrumb: 'BREADCRUMB.GENERAL' },
	},
  {
		path: 'form',
		component: FormComponent,
		// data: { breadcrumb: 'BREADCRUMB.GENERAL' },
	},
  {
		path: 'media',
		component: MediaComponent,
		// data: { breadcrumb: 'BREADCRUMB.GENERAL' },
	},
  {
		path: 'questionbank',
		component: QuestionbankComponent,
		// data: { breadcrumb: 'BREADCRUMB.GENERAL' },
	},
  {
		path: 'dashboard',
		component: DashboardComponent,
	},
  {
		path: 'questionform',
		component: QuestionformComponent,
	},
  {
		path: 'sidebar',
		component: SidebarComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
