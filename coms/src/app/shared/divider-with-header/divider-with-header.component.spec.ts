import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerWithHeaderComponent } from './divider-with-header.component';

describe('DividerWithHeaderComponent', () => {
  let component: DividerWithHeaderComponent;
  let fixture: ComponentFixture<DividerWithHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerWithHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerWithHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
