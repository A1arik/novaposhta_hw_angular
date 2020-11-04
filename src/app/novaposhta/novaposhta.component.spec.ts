import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaposhtaComponent } from './novaposhta.component';

describe('NovaposhtaComponent', () => {
  let component: NovaposhtaComponent;
  let fixture: ComponentFixture<NovaposhtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaposhtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaposhtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
