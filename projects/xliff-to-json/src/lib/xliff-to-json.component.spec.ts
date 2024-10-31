import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XliffToJsonComponent } from './xliff-to-json.component';

describe('XliffToJsonComponent', () => {
  let component: XliffToJsonComponent;
  let fixture: ComponentFixture<XliffToJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XliffToJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XliffToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
