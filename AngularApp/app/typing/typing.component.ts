import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  success:boolean = false;
  
  randomText = lorem.sentence();
  enteredText = '';

  EnableTypingModal() {
    let typingMod = document.getElementById('typingModal');
    typingMod?.classList.add('is-active');
    this.ResizeTypingModal();
  }
  ResizeTypingModal() 
  {
    let modalContent: HTMLElement | null =  document.getElementById('typingModalContent');
    setTimeout(() => {
      let height: number = Number(document.getElementById('typingContainer')?.getBoundingClientRect().height);
      if(modalContent != null)
      modalContent.style.maxHeight = height+5+'px';
    }, 10);
  }

  onInput(target:EventTarget){
    const value  = (<HTMLInputElement>target).value;
    this.enteredText = value;
    if(this.randomText === this.enteredText){
      this.ResizeTypingModal();
    }
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    
    return randomLetter === enteredLetter? 'correct' : 'incorrect';
   
  }
  CloseModal() {
    let modalBackground = document.getElementById('typingModal');
    modalBackground?.classList.remove('is-active');
  }

}