import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);

  public set darkMode(v: boolean) {
    this.darkTheme.next(v);
  }

  public get darkMode(): Observable<boolean> {
    return this.darkTheme.asObservable();
  }
}
