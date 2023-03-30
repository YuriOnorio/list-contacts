import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BartPage } from './bart.page';

describe('BartPage', () => {
  let component: BartPage;
  let fixture: ComponentFixture<BartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
