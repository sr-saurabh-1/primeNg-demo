import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { TableModule } from 'primeng/table';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuestionbankComponent } from './components/questionbank/questionbank.component';
import { QuestionformComponent } from './components/questionform/questionform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelComponent } from './components/panel/panel.component';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MediaComponent } from './components/media/media.component';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { FormComponent } from './components/form/form.component';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { BlockUIModule } from 'primeng/blockui';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuestionbankComponent,
    QuestionformComponent,
    DashboardComponent,
    PanelComponent,
    MediaComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    FormsModule,
    TableModule,
    MenubarModule,
    MenuModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    ToastModule,
    MessagesModule,
    ButtonModule,
    AccordionModule,
    DividerModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    CarouselModule,
    ImageModule,
    TagModule,
    CalendarModule,
    ReactiveFormsModule,
    EditorModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputMaskModule,
    InputSwitchModule,
    PasswordModule,
    BlockUIModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
