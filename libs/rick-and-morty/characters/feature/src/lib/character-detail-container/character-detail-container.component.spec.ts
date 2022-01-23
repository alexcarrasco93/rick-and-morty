import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailContainerComponent } from './character-detail-container.component';

describe('CharacterDetailContainerComponent', () => {
  let component: CharacterDetailContainerComponent;
  let fixture: ComponentFixture<CharacterDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
