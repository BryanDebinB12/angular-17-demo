import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowForTrackByPerfTestComponent } from './control-flow-for-track-by-perf-test.component';

describe('ControlFlowForTrackByPerfTestComponent', () => {
  let component: ControlFlowForTrackByPerfTestComponent;
  let fixture: ComponentFixture<ControlFlowForTrackByPerfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowForTrackByPerfTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowForTrackByPerfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
