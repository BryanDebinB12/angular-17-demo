import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVeryOwnTableComponent } from './my-very-own-table.component';

describe('MyVeryOwnTableComponent', () => {
  let component: MyVeryOwnTableComponent<unknown>;
  let fixture: ComponentFixture<MyVeryOwnTableComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyVeryOwnTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVeryOwnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
