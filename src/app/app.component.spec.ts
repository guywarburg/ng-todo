import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
    })
    .compileComponents();
  });
  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it(`should display 'NG Todo'`, () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });
  it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});
});
