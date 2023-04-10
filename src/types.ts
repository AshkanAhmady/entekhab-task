export interface characterType {
  name: string;
}

export interface charactersStateType {
  loading: boolean;
  data: Array<characterType>;
  error: any;
}

export interface SingleCharacterType {
  character: {
    name: string;
  };
}
