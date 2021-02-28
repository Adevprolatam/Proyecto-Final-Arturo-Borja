import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftslidebarComponent } from './leftslidebar.component';

describe('LeftslidebarComponent', () => {
  let component: LeftslidebarComponent;
  let fixture: ComponentFixture<LeftslidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftslidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftslidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
