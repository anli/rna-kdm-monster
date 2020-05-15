export interface ShowdownState {
  encounterId?: string;
  monsterName?: string;
  encounterName?: string;
  stats: Stat[];
}

export interface Encounter {
  id: string;
  monsterName: string;
  encounterName: string;
  stats: Stat[];
}

export interface Stat {
  name: string;
  value: number;
  hasPrefix?: boolean;
}
