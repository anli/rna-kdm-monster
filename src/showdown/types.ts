export interface ShowdownState {
  encounterId?: string;
  monsterName?: string;
  encounterName?: string;
  stats: Stat[];
  basicActives: Card[];
  selectedCardId?: string;
  selectedDeckId?: string;
  aiDraws: Card[];
  aiDiscards: Card[];
  aiCards: Card[];
  cards: Card[];
  aiWounds: Card[];
  aiActives: Card[];
  hitCards: Card[];
  hitDraws: Card[];
  hitDiscards: Card[];
  hitActives: Card[];
}

export interface Encounter {
  id: string;
  monsterName: string;
  encounterName: string;
  stats: Stat[];
  basicActives: Card[];
  aiCards: Card[];
  hitCards: Card[];
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
  token?: number;
  heal?: number;
}
