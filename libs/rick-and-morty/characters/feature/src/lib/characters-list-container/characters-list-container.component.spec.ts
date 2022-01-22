import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListContainerComponent } from './characters-list-container.component';

describe('CharactersListContainerComponent', () => {
  let component: CharactersListContainerComponent;
  let fixture: ComponentFixture<CharactersListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
