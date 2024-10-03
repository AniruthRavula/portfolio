import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index14Component } from './index14.component';

describe('Index14Component', () => {
  let component: Index14Component;
  let fixture: ComponentFixture<Index14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
