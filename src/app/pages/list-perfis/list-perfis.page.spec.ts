import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPerfisPage } from './list-perfis.page';

describe('ListPerfisPage', () => {
  let component: ListPerfisPage;
  let fixture: ComponentFixture<ListPerfisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListPerfisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
