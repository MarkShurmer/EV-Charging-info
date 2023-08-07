import {createTheme} from '@rneui/themed';

const theme = createTheme({
  components: {
    Header: {
      //backgroundColor: 'green',
    },
  },
  //   lightColors: {
  //     primary: '#1504a9',
  //     background: '#f4f0f0',
  //   },
  //   darkColors: {
  //     primary: '#f4f0f0',
  //     background: '#2f2965',
  //   },
  mode: 'dark',
});

export {theme};
