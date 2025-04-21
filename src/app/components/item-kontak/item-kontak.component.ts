import { Component, Input, Output, EventEmitter } from '@angular/core';


interface Kontak {
  id: string;
  nama: string;
  email: string;
}


@Component({
  selector: 'app-item-kontak',
  imports: [],
  templateUrl: './item-kontak.component.html',
  styleUrl: './item-kontak.component.css'
})
export class ItemKontakComponent {
  @Input() kontak: Kontak = { id: '', nama: '', email: '' };
  @Output() hapus = new EventEmitter<string>();

  hapusKontak(): void {
    this.hapus.emit(this.kontak.id);
  }
}
