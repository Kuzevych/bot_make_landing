import { createStyles } from "@material-ui/core/styles";


export default function style () {
  return createStyles({
    '@global': {
      body: {
        margin: '0'
      },
      'h2, h4, p': {
        margin: 0
      },
    },
    root: {}
  });
}