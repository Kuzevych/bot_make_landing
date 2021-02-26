import { Theme } from 'shared/types/theme';
import * as React from 'react';

const initialState = {
  theme: Theme.Dark,
  toggleTheme: (theme: Theme) => {}
};

export const GlobalContext = React.createContext(initialState);