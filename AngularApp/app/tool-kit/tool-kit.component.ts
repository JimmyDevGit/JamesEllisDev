import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tool-kit',
  templateUrl: './tool-kit.component.html',
  styleUrls: ['./tool-kit.component.css']
})
export class ToolKitComponent implements AfterViewInit {
  
  icon!: ElementRef;  
  innerWidth!: number;
  mobileMaxScreenWidth: number = 768;

  @HostListener('window:resize', ['$event'])
  sizeChange(event: any) {
    this.SetIconSize();
  }

  @HostListener('window:scroll', ['$event'])
   onScroll(event:Event){
    this.IconScrollCheck();
   }

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void 
  {
    this.SetIconSize();
  }

  SetIconSize()
  {
    this.innerWidth = window.innerWidth;
    let elements = this.elRef.nativeElement.querySelectorAll(".iconDiv");
    //Icon size
    let EM: number;
    //Margin bottom
    let MB: number;
    //Text size
    let TsRem: number;
    if(this.innerWidth <= this.mobileMaxScreenWidth)
    {
      EM = 4; 
      MB = 1;
      TsRem = 1;
    }
    else
    {
      EM = 7;
      MB = 4;
      TsRem = 2;
    }
      for(var i = 0; i < elements.length; i++){
        //Change icon size
        if(elements[i].querySelector(':scope > i').classList.contains('iconFA')){
          elements[i].querySelector(':scope > i').style = 'font-size: '+EM+'em;'
          
        }
        //Change icon size (where img substitutes FAicons)
        else
        {
          elements[i].querySelector(':scope > i').querySelector(':scope > img').style = 'min-width: '+EM+'em; min-height: '+EM+'em; max-width: '+EM+'em; max-height: '+EM+'em;'
        }
        //Change Text size
        elements[i].querySelector(':scope > h3').style = 'font-size: '+TsRem+'rem';
        //Change margin-bottom for div
        elements[i].style = 'margin-bottom: '+MB+'em;'
      }
  }
  

  IconScrollCheck()
  {
    let row1 = this.elRef.nativeElement.querySelectorAll(".row1");
    let row2 = this.elRef.nativeElement.querySelectorAll(".row2");
    let row3 = this.elRef.nativeElement.querySelectorAll(".row3");

    let row1Text = this.elRef.nativeElement.querySelectorAll(".row1Text");
    let row2Text = this.elRef.nativeElement.querySelectorAll(".row2Text");
    let row3Text = this.elRef.nativeElement.querySelectorAll(".row3Text");
    
    let row1Top = row1[0].getBoundingClientRect().top;
    let row2Top = row2[0].getBoundingClientRect().top;
    let row3Top = row3[0].getBoundingClientRect().top;

    let scrollPercentR1 = 0;
    let scrollPercentR2 = 0;
    let scrollPercentR3 = 0;

    if(row1Top && visualViewport){
      scrollPercentR1 = ((row1Top / visualViewport.height) * 100);}
    if(row2Top && visualViewport){
      scrollPercentR2 = ((row2Top / visualViewport.height) * 100);}
    if(row3Top && visualViewport){
      scrollPercentR3 = ((row3Top / visualViewport.height) * 100);}

    if(scrollPercentR1 < 95 && !row1[0].classList.contains('bounce'))
    {
      this.IconFor(row1, row1Text);
    }
    else if(scrollPercentR1 > 100 && row1[0].classList.contains('bounce'))
    {
      this.IconDeAnimate(row1, row1Text);
    }
    if(scrollPercentR2 < 95 && !row2[0].classList.contains('bounce'))
    {
      this.IconFor(row2, row2Text);
    }
    else if(scrollPercentR2 > 100 && row2[0].classList.contains('bounce'))
    {
      this.IconDeAnimate(row2, row2Text);
    }
    if(scrollPercentR3 < 95 && !row3[0].classList.contains('bounce'))
    {
      this.IconFor(row3, row3Text);
    }
    else if(scrollPercentR3 > 100 && row3[0].classList.contains('bounce'))
    {
      this.IconDeAnimate(row3, row3Text);
    }
  }

  IconFor(row: HTMLCollectionOf<HTMLElement>, text: HTMLCollectionOf<HTMLElement>)
  {
    let timer: number = 0;
    for(let i = 0; i < row.length; i++)
    {
      timer = timer + 200;
      this.IconAnimate(row[i], timer, text[i]);
    }
  }

  IconAnimate(icon: HTMLElement, timer: number, text: HTMLElement)
  {
    setTimeout(function(){
      icon.classList.add('bounce');
      text.classList.add('textAppear')
    },timer);
  }

  IconDeAnimate(row: HTMLCollectionOf<HTMLElement>, text: HTMLCollectionOf<HTMLElement>)
  {
    for(let i = 0; i < row.length; i++)
    {
      row[i].classList.remove('bounce');
      text[i].classList.remove('textAppear');
    }
  }
}