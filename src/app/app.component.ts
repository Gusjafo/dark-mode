import { Component, EventEmitter, Output } from "@angular/core";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  template: `
    <div [ngClass]="{ 'dark-theme': isDarkMode }">
      <app-toolbar [title]="title" icon="account_circle"> </app-toolbar>
      <div class="main">
        <app-card></app-card>
      </div>
      <router-outlet />
    </div>
  `,
  styleUrl: "app.component.scss",
})
export class AppComponent {
  title = "dark-mode";
  isDarkMode = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode.subscribe({
      next: (v) => (this.isDarkMode = v),
      error: (e) => console.error(e),
      complete: () => console.info("complete"),
    });
  }
}
