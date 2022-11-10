import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent{
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  EnablePasswordModal() {
    let passMod = document.getElementById('passwordModal');
    passMod?.classList.add('is-active');
    this.ResizePasswordModal();
  }
  ResizePasswordModal() 
  {
    let modalContent: HTMLElement | null =  document.getElementById('modal-content');
    setTimeout(() => {
      let height: number = Number(document.getElementById('passwordContainer')?.getBoundingClientRect().height);
      if(modalContent != null)
    modalContent.style.maxHeight = height+5+'px';
    }, 10);
  }
  CloseModal() {
    let modalBackground = document.getElementById('passwordModal');
    modalBackground?.classList.remove('is-active');
  }

  onChangeLength(target:EventTarget){
    const value  = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    
    if(this.includeNumbers) {
      validChars += numbers;
    }
    
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i< this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    this.ResizePasswordModal();
  }
}
