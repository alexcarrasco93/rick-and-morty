import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharactersFilters } from '@workspace/rick-and-morty/characters/ui-models';

@Component({
  selector: 'c-characters-filters',
  templateUrl: './characters-filters.component.html',
  styleUrls: ['./characters-filters.component.scss'],
})
export class CharactersFiltersComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: [this.filters?.name, [Validators.required]],
  });

  @Input()
  filters?: CharactersFilters;

  @Output()
  filter = new EventEmitter<CharactersFilters>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form.get('name')?.valueChanges.subscribe((value) => {
      this.filterCharactersByName(value);
    });
    if (this.filters?.name) {
      this.form.get('name')?.setValue(this.filters?.name);
      this.filterCharactersByName(this.filters?.name);
    }
  }

  private filterCharactersByName(name: string) {
    this.filter.emit({ name });
  }
}
