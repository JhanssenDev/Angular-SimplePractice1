import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFindComponent } from './heroe-find.component';

describe('HeroeFindComponent', () => {
  let component: HeroeFindComponent;
  let fixture: ComponentFixture<HeroeFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
