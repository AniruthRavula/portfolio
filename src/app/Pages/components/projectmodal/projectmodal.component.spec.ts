import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectmodalComponent } from './projectmodal.component';

describe('ProjectmodalComponent', () => {
  let component: ProjectmodalComponent;
  let fixture: ComponentFixture<ProjectmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
