import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTabsComponent } from './alt-tabs.component';

describe('AltTabsComponent', () => {
  let component: AltTabsComponent;
  let fixture: ComponentFixture<AltTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
