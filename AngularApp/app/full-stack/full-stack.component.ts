import { Component, HostListener } from '@angular/core';
import { PasswordComponent } from '../password/password.component';
import { TypingComponent } from '../typing/typing.component';


@Component({
  providers: [PasswordComponent, TypingComponent],
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrls: ['./full-stack.component.css']
})
export class FullStackComponent {
  constructor(private passwordComponent: PasswordComponent, private typingComponent: TypingComponent ) { }
  
  EnablePasswordModal(): void {
    this.passwordComponent.EnablePasswordModal();
  }
  EnableTypingModal(): void {
    this.typingComponent.EnableTypingModal();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event){
    const revealDiv = Array.from(document.getElementsByClassName('reveal'));

    let windowHt = window.innerHeight;
    revealDiv.forEach(element => {  
      let elementPos = element.getBoundingClientRect();
      if(elementPos.top < windowHt / 1.3) {
        element.classList.add('active');
      }
      else{
        element.classList.remove('active');
      }
    });
  }
}
  