import { createStyles } from "@material-ui/core/styles";


export default function style () {
  return createStyles({
    '@global': {
      body: {
        margin: '0',
        fontFamily: '"Courier New", sans-serif'
      }
    },
    root: {}
  });
}