export interface ShowdownState {
  encounterId?: string;
  monsterName?: string;
  encounterName?: string;
  stats: Stat[];
  basicActives: Card[];
  selectedCardId?: string;
  selectedDeckId?: string;
}

export interface Encounter {
  id: string;
  monsterName: string;
  encounterName: string;
  stats: Stat[];
  basicActives: Card[];
}

export interface Stat {
  name: string;
  value: number;
  hasPrefix?: boolean;
}

export interface Card {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
}
