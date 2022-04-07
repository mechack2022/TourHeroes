import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NessagesComponent } from './nessages.component';

describe('NessagesComponent', () => {
  let component: NessagesComponent;
  let fixture: ComponentFixture<NessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
