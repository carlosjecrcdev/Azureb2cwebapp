import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureloginComponent } from './azurelogin.component';

describe('AzureloginComponent', () => {
  let component: AzureloginComponent;
  let fixture: ComponentFixture<AzureloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
