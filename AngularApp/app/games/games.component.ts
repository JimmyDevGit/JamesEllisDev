import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
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
