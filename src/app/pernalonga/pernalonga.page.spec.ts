import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PernalongaPage } from './pernalonga.page';

describe('PernalongaPage', () => {
  let component: PernalongaPage;
  let fixture: ComponentFixture<PernalongaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PernalongaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
