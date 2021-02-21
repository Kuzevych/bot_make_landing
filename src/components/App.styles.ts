import { createStyles } from "@material-ui/core/styles";


export default function style () {
  return createStyles({
    '@global': {
      body: {
        margin: '0',
        fontFamily: '"Comic Sans MS", sans-serif'
      },

      'h2, p': {
        margin: 0
      }
    },
    root: {}
  });
}