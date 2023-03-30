import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PicapauPage } from './picapau.page';

describe('PicapauPage', () => {
  let component: PicapauPage;
  let fixture: ComponentFixture<PicapauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PicapauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
