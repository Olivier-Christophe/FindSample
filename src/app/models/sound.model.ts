export interface SoundModel {
  count: number;
  next?: string;
  results: Result[];
  previous?: string;
}

export interface Result {
  id: number;
  name: string;
  tags: string[];
  license: string;
  username: string;
}