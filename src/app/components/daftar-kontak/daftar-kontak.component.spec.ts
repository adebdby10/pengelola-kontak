import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKontakComponent } from './daftar-kontak.component';

describe('DaftarKontakComponent', () => {
  let component: DaftarKontakComponent;
  let fixture: ComponentFixture<DaftarKontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarKontakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarKontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
