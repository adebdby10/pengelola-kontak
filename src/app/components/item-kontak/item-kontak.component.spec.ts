import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemKontakComponent } from './item-kontak.component';

describe('ItemKontakComponent', () => {
  let component: ItemKontakComponent;
  let fixture: ComponentFixture<ItemKontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemKontakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemKontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
