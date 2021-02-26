import { Theme } from 'shared/types/theme';
import * as React from 'react';

export interface InitialState {
  theme: Theme | string;
  toggleTheme?: (theme: Theme) => void
}

const initialState: InitialState = {
  theme: Theme.Dark,
};

export const ThemeContext = React.createContext(initialState);