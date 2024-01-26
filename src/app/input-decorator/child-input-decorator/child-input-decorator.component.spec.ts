import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputDecoratorComponent } from './child-input-decorator.component';

describe('ChildInputDecoratorComponent', () => {
  let component: ChildInputDecoratorComponent;
  let fixture: ComponentFixture<ChildInputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildInputDecoratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
