import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index18Component } from './index18.component';

describe('Index18Component', () => {
  let component: Index18Component;
  let fixture: ComponentFixture<Index18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
