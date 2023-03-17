import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsloviZaIznajmljivanjeComponent } from './uslovi-za-iznajmljivanje.component';

describe('UsloviZaIznajmljivanjeComponent', () => {
  let component: UsloviZaIznajmljivanjeComponent;
  let fixture: ComponentFixture<UsloviZaIznajmljivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsloviZaIznajmljivanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsloviZaIznajmljivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
