import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginBottom: -40,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 50,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: 55,
    bottom: 25,
  },
  sign: {
    color: 'white',
    fontSize: 30,
    left: 1,
    bottom: 5,
  },

  header: {
    marginBottom: 20,
    maxWidth: '100%',
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 25,
    marginTop: 20,
    paddingTop: 10,
    alignSelf: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    display: 'flex',
    margin: 10,
  },
  sweetness: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  bobaAmount: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  textOptions: {
    fontSize: 16,
    alignSelf: 'center',
  },


  selected_touch: {
    backgroundColor: 'violet',
    margin: 10,
    padding: 10,
    flex: 1,
    borderRadius: 10,
  },
  non_selected_touch: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flex: 1,
    borderRadius: 10,
  },
  start_button: {
    margin: 10,
    padding: 25,
    flex: 2,
    display: 'flex',
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  startText: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
  },

});

export default styles;
