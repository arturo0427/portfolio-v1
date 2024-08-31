import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Configurar idioma predeterminado
    this.translate.setDefaultLang('es');
  }

  // scrollToSection(section: string) {
  //   document.querySelector(section)?.scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // }

  // Método para cambiar de idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
