import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index17Component } from './index17.component';

describe('Index17Component', () => {
  let component: Index17Component;
  let fixture: ComponentFixture<Index17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
