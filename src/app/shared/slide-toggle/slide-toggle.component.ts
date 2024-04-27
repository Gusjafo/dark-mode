import { Component, EventEmitter, Output } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-slide-toggle",
  templateUrl: "slide-toggle.component.html",
  styleUrl: `slide-toggle.component.scss`,
})
export class SlideToggleComponent {
  constructor(private themeService: ThemeService) {}
  name = "dark_mode";
  isChecked = false;

  toggleDarkMode() {
    this.themeService.darkMode = this.isChecked;
  }
}
