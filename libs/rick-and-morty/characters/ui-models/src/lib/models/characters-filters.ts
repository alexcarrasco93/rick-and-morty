export interface CharactersFilters {
  name?: string;
  status?: Status;
  species?: string;
  type?: string;
  gender?: Gender;
}

type Status = 'alive' | 'dead' | 'unknown';
type Gender = 'female' | 'male' | 'genderless' | 'unknown';
