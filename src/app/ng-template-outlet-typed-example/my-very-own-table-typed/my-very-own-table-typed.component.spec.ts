import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVeryOwnTableTypedComponent } from './my-very-own-table-typed.component';

describe('MyVeryOwnTableTypedComponent', () => {
  let component: MyVeryOwnTableTypedComponent<unknown>;
  let fixture: ComponentFixture<MyVeryOwnTableTypedComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyVeryOwnTableTypedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVeryOwnTableTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
