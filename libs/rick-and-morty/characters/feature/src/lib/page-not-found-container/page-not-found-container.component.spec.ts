import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundContainerComponent } from './page-not-found-container.component';

describe('PageNotFoundContainerComponent', () => {
  let component: PageNotFoundContainerComponent;
  let fixture: ComponentFixture<PageNotFoundContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
