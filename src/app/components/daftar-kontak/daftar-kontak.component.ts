import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontakService } from '../../services/kontak.service';
import { ItemKontakComponent } from "../item-kontak/item-kontak.component";


interface Kontak {
  id: string;
  nama: string;
  email: string;
}

@Component({
  selector: 'app-daftar-kontak',
  imports: [CommonModule, ItemKontakComponent],
  templateUrl: './daftar-kontak.component.html',
  styleUrl: './daftar-kontak.component.css'
})
export class DaftarKontakComponent implements OnInit {
  daftarKontak: Kontak[] = [];

  constructor(private kontakService: KontakService) {}

  ngOnInit(): void {
    this.muatKontak();
  }

  muatKontak(): void {
    this.kontakService.getKontak().subscribe((data) => {
      this.daftarKontak = data;
    });
  }

  hapusKontak(id: string): void {
    this.kontakService.hapusKontak(id).subscribe(() => {
      this.daftarKontak = this.daftarKontak.filter(kontak => kontak.id !== id);
    });
  }
}
