import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index13Component } from './index13.component';

describe('Index13Component', () => {
  let component: Index13Component;
  let fixture: ComponentFixture<Index13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
