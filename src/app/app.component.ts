import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updateAt = Date.now();
    this.counter++;
  }

  decease(): void {
    this.updateAt = Date.now();
    this.counter--;
  }

  clear(): void {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
