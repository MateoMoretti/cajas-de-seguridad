import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JuninComponent } from './junin.component';

describe('JuninComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        JuninComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JuninComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cajas-de-seguridad'`, () => {
    const fixture = TestBed.createComponent(JuninComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cajas-de-seguridad');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JuninComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('cajas-de-seguridad app is running!');
  });
});
