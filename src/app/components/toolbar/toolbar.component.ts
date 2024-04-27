import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "toolbar.component.html",
  styleUrl: "toolbar.component.scss",
})
export class ToolbarComponent {
  @Input({ required: false }) title: string = "";
  @Input({ required: false }) name: string = "verified_user";
}
