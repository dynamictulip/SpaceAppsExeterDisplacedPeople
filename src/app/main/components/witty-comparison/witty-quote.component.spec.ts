import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WittyQuoteComponent } from './witty-quote.component';

describe('WittyQuoteComponent', () => {
  let component: WittyQuoteComponent;
  let fixture: ComponentFixture<WittyQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WittyQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WittyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
