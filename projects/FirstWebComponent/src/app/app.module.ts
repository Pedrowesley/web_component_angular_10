import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CardBeneficiarioComponent } from './card-beneficiario/card-beneficiario.component';

@NgModule({
  declarations: [CardBeneficiarioComponent],
  imports: [BrowserModule],
  entryComponents: [CardBeneficiarioComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(CardBeneficiarioComponent, {
      injector,
    });
    customElements.define('card-beneficiario', webComponent);
  }

  ngDoBootstrap() {}
}
