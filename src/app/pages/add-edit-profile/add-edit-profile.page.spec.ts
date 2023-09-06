import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditProfilePage } from './add-edit-profile.page';

describe('AddEditProfilePage', () => {
  let component: AddEditProfilePage;
  let fixture: ComponentFixture<AddEditProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
