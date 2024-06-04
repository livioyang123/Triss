import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologiaContentComponent } from './cronologia-content.component';

describe('CronologiaContentComponent', () => {
  let component: CronologiaContentComponent;
  let fixture: ComponentFixture<CronologiaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronologiaContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronologiaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
