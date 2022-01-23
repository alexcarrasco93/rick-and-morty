import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharactersFilters } from '@workspace/rick-and-morty/characters/ui-models';

@Component({
  selector: 'workspace-characters-filters',
  templateUrl: './characters-filters.component.html',
  styleUrls: ['./characters-filters.component.scss'],
})
export class CharactersFiltersComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  @Output()
  filter = new EventEmitter<CharactersFilters>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form.get('name')?.valueChanges.subscribe((value) => {
      this.filterCharactersByName(value);
    });
  }

  private filterCharactersByName(name: string) {
    this.filter.emit({ name });
  }
}
