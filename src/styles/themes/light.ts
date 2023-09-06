const colors = {
  brand: {
    100: '#FFF5E0',
    200: '#FF6969',
    300: '#BB2525',
    400: '#141E46',
  },
  grays: {
    100: '#FFFFFF',
    200: '#F7F7F7',
    300: '#E7E7E7',
    400: '#CCCCCC',
    500: '#909090',
    600: '#8B8B8B',
    700: '#707070',
    800: '#575757',
    900: '#2D2A26',
    1000: '#000000',
  }
}

const measures = {
  px: {
    100: '1px',
    200: '5px',
    300: '10px',
    400: '20px',
    500: '50px'
  },
  pc: {
     50: '5%',
    100: '10%',
    200: '20%',
    300: '30%',
    400: '40%',
    500: '50%',
    600: '60%',
    700: '70%',
    800: '80%',
    900: '90%',
    950: '95%',
    1000: '100%',
  }
}

const lightTheme = {
  background: colors.brand[200],
  color: colors.grays[1000],
  calendar: {
    background: colors.brand[300],
    borderRadius: measures.px[300],
    padding: measures.px[300],
    width: measures.pc[950],
    day: {
      background: colors.brand[100],
      borderRadius: measures.px[200],
      padding: measures.px[200],
      header: {
        borderColor: colors.grays[400],
        borderWidth: measures.px[100],
        marginBottom: measures.px[200],
        paddingBottom: measures.px[200],
      }
    },
    grid: {
      background: colors.brand[300],
      borderColor: colors.brand[300],
      columnGap: measures.px[300],
      rowGap: measures.px[300],
    }
  }
}

export { lightTheme }