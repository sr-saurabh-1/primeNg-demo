import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  date:Date|undefined;
  dates:Date[]=[];
  dateRange:Date[]=[];
  formGroup!: FormGroup;
  formGroup1!: FormGroup;

  minDate!: Date;

  maxDate!: Date;
  text!:string;
  value1!:string;
  value2!:string;
  value3!:string;
blockedDocument: boolean = false;


  constructor() {}
  ngOnInit():void{
    this.formGroup=new FormGroup({
      date:new FormControl<Date |null>(null)
    })
    this.formGroup1=new FormGroup({
      date:new FormControl<Date |null>(null)
    })
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }


  submit(){
    // this.date.
    console.log(this.formGroup.controls['date'].value);
    console.log(this.dates);
    console.log(this.dateRange);
  }


  blockDocument() {
      this.blockedDocument = true;
      setTimeout(() => {
          this.blockedDocument = false;
      }, 3000);
  }
}

