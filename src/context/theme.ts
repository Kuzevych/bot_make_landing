import { Theme } from 'shared/types/theme';
import * as React from 'react';

export interface InitialState {
  theme: Theme | string;
  toggleTheme: (theme: Theme) => void
}

const initialState: InitialState = {
  theme: Theme.Dark,
  toggleTheme: (theme: Theme) => {}
};

export const ThemeContext = React.createContext(initialState);