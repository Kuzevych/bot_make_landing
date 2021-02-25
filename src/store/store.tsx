import { Theme } from 'shared/types/theme';
import * as React from 'react';

// export interface Store {
//   isAuth?: boolean;
//   theme: Theme,
//   toggleTheme: () => void
// }

// export const initialState: Store = {
//   theme: Theme.Dark,
//   toggleTheme: () => {}
// };


export const GlobalContext = React.createContext({
  theme: Theme.Dark,
  toggleTheme: () => {}
});