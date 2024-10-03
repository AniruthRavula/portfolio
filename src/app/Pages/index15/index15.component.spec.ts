import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index15Component } from './index15.component';

describe('Index15Component', () => {
  let component: Index15Component;
  let fixture: ComponentFixture<Index15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
