import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index16Component } from './index16.component';

describe('Index16Component', () => {
  let component: Index16Component;
  let fixture: ComponentFixture<Index16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
