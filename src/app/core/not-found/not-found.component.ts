import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "pm-not-found",
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Oops!</h1>
    <h2>Something went wrong.</h2>
    <a mat-button color="primary" routerLink="/">
      Take me home
    </a>
  `,
  styleUrl: "./not-found.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {}
