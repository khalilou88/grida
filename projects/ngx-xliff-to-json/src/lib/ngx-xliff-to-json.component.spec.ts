import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXliffToJsonComponent } from './ngx-xliff-to-json.component';

describe('NgxXliffToJsonComponent', () => {
  let component: NgxXliffToJsonComponent;
  let fixture: ComponentFixture<NgxXliffToJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxXliffToJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxXliffToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
