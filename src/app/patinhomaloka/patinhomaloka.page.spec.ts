import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatinhomalokaPage } from './patinhomaloka.page';

describe('PatinhomalokaPage', () => {
  let component: PatinhomalokaPage;
  let fixture: ComponentFixture<PatinhomalokaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatinhomalokaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
