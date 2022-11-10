import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit, AfterViewInit {
  unityClipPath!: string;
  polygonDivStyle!: string;
  @ViewChild('unityTitle') unityTitle!: ElementRef;
  @ViewChild('titleMain') titleMain!: ElementRef<HTMLSpanElement>;
  
  constructor() {}

  ngOnInit(): void {
    this.unityClipPath = `-webkit-clip-path: polygon(0% 0%);`;
    this.polygonDivStyle = "";
    this.RadialReveal(this.unityTitle, this.unityClipPath);
  }
  ngAfterViewInit(): void {
    this.titleMain.nativeElement.textContent = this.titleMain.nativeElement.parentElement?.parentElement?.parentElement?.id.toString() || null
  }
   @HostListener('window:scroll', ['$event'])
   onScroll(event:Event){
    this.RadialReveal(this.unityTitle, this.unityClipPath);
   }

  RadialReveal(clip: ElementRef, clipPath:string) {
    let top = clip?.nativeElement.getBoundingClientRect().top;
    let scrollPercent = 0;
    if(top && visualViewport)
      scrollPercent= ((top / visualViewport.height) * 300 -100);
    if (clip != null && scrollPercent > 1 && scrollPercent < 100) {
      this.polygonDivStyle = "";
      let scrollOpposite = 100 - scrollPercent;
      if(scrollOpposite >= 0 && scrollOpposite < 33)
      {
        clipPath = `clip-path: polygon(0% `+[scrollPercent-67]+`% ,50% 33%, 0% 33%, 0% 66%, 100% 66%, 100% `+[scrollOpposite+66]+`%, 50% 66%, 0% 66%);`;
      }
      else if(scrollOpposite >= 33 && scrollOpposite < 66) 
      {
        clipPath = `clip-path: polygon(0% 0%, `+[(scrollOpposite-34)*3]+`% 0% ,50% 33%, 0% 33%, 0% 100%,  `+[(scrollPercent-34)*3]+`% 100%, 50% 66%, 100% 66%, 100% 100%, 0% 100%);`;
      }
      else if(scrollOpposite >= 66 && scrollOpposite <= 100) 
      {
        clipPath = `clip-path: polygon(0% 0%, 100% 0% , 100% `+[33-scrollPercent]+`% ,50% 33%, 0% 33%, 0% `+[scrollPercent+66]+`%,50% 66%, 100% 66%, 100% 100%, 0% 100%);`;
      }
    }
    else if(scrollPercent > 100)
    {
      clipPath = `clip-path: polygon(0% 0%);`;
    }
    else if(scrollPercent < 1)
    {
      clipPath = `clip-path: polygon(0% 0%, 100% 0% , 100% 33% ,50% 33%, 0% 33%, 0% 66%,50% 66%, 100% 66%, 100% 100%, 0% 100%);`;
      //Removed to test performace
      //this.polygonDivStyle = 'filter: drop-shadow(10px 10px 200px #02577a) drop-shadow(-10px -10px 50px #02577a);'
    }
      this.unityClipPath = clipPath;
  }
  
}
