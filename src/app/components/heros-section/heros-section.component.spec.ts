import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosSectionComponent } from './heros-section.component';

describe('HerosSectionComponent', () => {
  let component: HerosSectionComponent;
  let fixture: ComponentFixture<HerosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerosSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
