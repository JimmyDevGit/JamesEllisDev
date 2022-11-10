import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackComponent } from './full-stack.component';

describe('FullStackComponent', () => {
  let component: FullStackComponent;
  let fixture: ComponentFixture<FullStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
