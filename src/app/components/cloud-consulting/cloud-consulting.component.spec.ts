import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConsultingComponent } from './cloud-consulting.component';

describe('CloudConsultingComponent', () => {
  let component: CloudConsultingComponent;
  let fixture: ComponentFixture<CloudConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
