import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoobyPage } from './scooby.page';

describe('ScoobyPage', () => {
  let component: ScoobyPage;
  let fixture: ComponentFixture<ScoobyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScoobyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
