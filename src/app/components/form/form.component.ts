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
  demoForm!: FormGroup;


  minDate!: Date;

  maxDate!: Date;
  text!:string;
  value1!:string;
  value2!:string;
  value3!:string;
  categories!:{key:string,name:string}[];
  blockedDocument: boolean = false;
  selectedCategories:any;
  securityQuestionList!:{name:string}[];

  isError:boolean=false;
  food!:string;


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


    this.categories=[{name:'Mumbai',key:'mumbai'}, {name:'Hyderabad',key:'hyd'}, {name:'Kolkata',key:'kol'},{name:'Patna',key:'patna'}];


    this.securityQuestionList=[
      {name:'What is the name of your first pet'},
      {name:'What is the name of your best friend'},
      {name:'What is the name of your favourite food'},
      {name:'What is the name of your favourite sports'},
      {name:'What is the name of your favourite sports player'},
    ]


    this.demoForm=new FormGroup({
      fName:new FormControl<string>(''),
      lName:new FormControl<string>(''),
      email:new FormControl<string>(''),
      phone:new FormControl<string|null>(null),
      password:new FormControl<string>(''),
      dob:new FormControl<string>(''),
      securityQuestion:new FormControl<string>(''),
      securityAnswers:new FormControl<string>(''),
      hobbies:new FormControl<string[]>([])
    })
  }


  submit(){
    // this.date.
    console.log(this.formGroup.controls['date'].value);
    console.log(this.dates);
    console.log(this.dateRange);
  }


  submitDemoForm(){
    if(this.demoForm.invalid){
      this.isError=true;
    }
    else{
      this.isError=false;
    }
    console.log(this.demoForm.value);
  }


  blockDocument() {
      this.blockedDocument = true;
      setTimeout(() => {
          this.blockedDocument = false;
      }, 3000);
  }
}

