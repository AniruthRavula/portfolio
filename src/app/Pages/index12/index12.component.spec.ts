import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index12Component } from './index12.component';

describe('Index12Component', () => {
  let component: Index12Component;
  let fixture: ComponentFixture<Index12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Index12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
