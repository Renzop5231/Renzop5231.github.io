import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpWordListComponent } from './jp-word-list.component';

describe('JpWordListComponent', () => {
  let component: JpWordListComponent;
  let fixture: ComponentFixture<JpWordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpWordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpWordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
