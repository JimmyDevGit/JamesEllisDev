import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolKitComponent } from './tool-kit.component';

describe('ToolKitComponent', () => {
  let component: ToolKitComponent;
  let fixture: ComponentFixture<ToolKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
