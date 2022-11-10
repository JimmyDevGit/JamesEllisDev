import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare let Email: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  //Name Variables
  name: string = '';
  nameValidateAttempted: boolean = false;
  nameClass: string = "input";
  
  //Email Variables
  email: string = '';
  emailValidateAttempted: boolean = false;
  emailClass: string = 'input';

  //Message Variables
  message: string = '';
  messageValidateAttempted: boolean = false;
  messageClass: string = 'input';

  //Button Variables
  submitBtnTxt: string = 'Send';
  submitBtnClass: string = 'is-blue';
  submitBtnDisabled: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  ///
  /// Name Validation
  ///

  ValidateName(){
      if(this.contactForm.get('name')?.valid) {
        this.nameClass = "is-success";
      } else {
        this.nameClass = "is-danger";
      }
    this.nameValidateAttempted = true;
  }

  ///
  /// Email to Lowercase
  ///

  EmailToLowerCase(target:EventTarget){
    const value: string  = (<HTMLInputElement>target).value;
    (<HTMLInputElement>target).value = value.toLocaleLowerCase();
  }

  ///
  /// Email Validation
  ///

  ValidateEmail(){
      if(this.contactForm.get('email')?.valid) {
        this.emailClass = 'is-success';
        
      } else {
        this.emailClass = 'is-danger';
      }
    this.emailValidateAttempted = true;
  }

  ///
  /// Message Validation
  ///

  ValidateMessage(){
    if(this.contactForm.get('message')?.valid) {
      this.messageClass = "is-success";
    } else {
      this.messageClass = "is-danger";
    }
  this.messageValidateAttempted = true;
  }

  ///
  /// Submit Contact Form
  ///

  ContactSubmit(f:any){
    //Validate all fields
    this.ValidateName();
    this.ValidateEmail();
    this.ValidateMessage();
    if(this.contactForm.valid){


      //Post values using f.value

      this.http.post('/send', f.value)
      .subscribe((res) => {
        console.log(res);
      });
      

      
      //clear fields
      this.ContactFormReset();
      //Notify submitted
      this.NotifySubmitted();
    }
  }
  
  ///
  /// Contact form reset
  ///

  ContactFormReset() {
    this.contactForm.reset();
    this.nameValidateAttempted = false;
    this.emailValidateAttempted = false;
    this.messageValidateAttempted = false;
    this.nameClass = "";
    this.emailClass = "";
    this.messageClass = "";
  }

  ///
  /// Notify Submitted
  ///

  NotifySubmitted() {
    this.submitBtnTxt = 'Your message has been sent';
    this.submitBtnClass = 'is-success'
    this.submitBtnDisabled = true;
  }
}
