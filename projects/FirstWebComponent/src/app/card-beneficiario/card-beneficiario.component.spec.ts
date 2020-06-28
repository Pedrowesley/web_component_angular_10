import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBeneficiarioComponent } from './card-beneficiario.component';

describe('CardBeneficiarioComponent', () => {
  let component: CardBeneficiarioComponent;
  let fixture: ComponentFixture<CardBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
