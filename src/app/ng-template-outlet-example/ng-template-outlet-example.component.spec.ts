import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example.component';

describe('NgTemplateOutletExampleComponent', () => {
  let component: NgTemplateOutletExampleComponent;
  let fixture: ComponentFixture<NgTemplateOutletExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateOutletExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgTemplateOutletExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
