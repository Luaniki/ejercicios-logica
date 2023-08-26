import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImParesPage } from './im-pares.page';

describe('ImParesPage', () => {
  let component: ImParesPage;
  let fixture: ComponentFixture<ImParesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImParesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
