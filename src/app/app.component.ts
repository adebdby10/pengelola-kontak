import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaftarKontakComponent } from './components/daftar-kontak/daftar-kontak.component';
import { ItemKontakComponent } from "./components/item-kontak/item-kontak.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DaftarKontakComponent, ItemKontakComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pengelola-kontak';
}
