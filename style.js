import { StyleSheet } from 'react-native';

export const pageStyle = StyleSheet.create({
   mainContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#edf2f4',
   },
   view1: {
      backgroundColor: '#ef233c',

      height: 250,
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: '#ef233c',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 3,

   },
   header: {
      flexDirection: 'row',
      marginTop: 10

   },
   matchHeading: {
      backgroundColor: '#ef233c',
      paddingLeft: 4,
      paddingRight: 4,
   },
   title: {
      color: 'white',
      fontSize: 16
   },
   view2: {
      backgroundColor: 'white',
      height: 90,
      display: 'none',
      zIndex: 1,
      marginTop: -20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: '#ef233c',
      borderWidth: 4,
      justifyContent: 'space-evenly',
   },
   commentry: {
      marginTop: 30,
      textAlign: 'center',
      fontSize: 20
   },
   view3: {
      backgroundColor: 'white',
      flex: 1,
      marginTop: 30,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,


   },
   live: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: 40,
      height: 20,
      right: 10,
      borderRadius: 4,
      flexDirection: 'row',
      shadowColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 3

   },

   flag: {
      width: 50,
      height: 50,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: 'rgba(255,255,255,0.52)',
      marginBottom: 10
   },
   tab: {
      textAlign: 'center',

   },
   over: {
      color: '#fff',
      textAlign: 'center',
      opacity: 0.8,
      marginTop: 5,


   },
   tabl: {
      backgroundColor: 'white',
      height: 30,
      borderRadius: 10,

   },
   v3v1: {
      marginTop: 20,
      marginLeft: 30,
      marginBottom: 5,
      fontWeight: '600',
      backgroundColor: 'whitesmoke',
      width: 110,
      padding: 4,
      borderRadius: 6
   },
   view4: {
      backgroundColor: '#ef233c',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 40,
      flexDirection: 'row'
   },
   view5: {
      backgroundColor: 'black',
      height: 40,
      alignItems: 'center'
   },

   tabl1: {
      backgroundColor: 'whitesmoke',
      height: 30,
      borderRadius: 10,
      marginTop: 2
   }
   ,
   scoret: {
      color: 'rgba(255,255,255,0.88)',
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center'
   },
   dot: {
      width: 6,
      height: 6,
      backgroundColor: '#ef233c',
      marginTop: 7,
      marginLeft: 5,
      borderRadius: 8

   },
   tx1: {
      fontSize: 10,
      marginLeft: 5,
      marginTop: 3

   },
   opp1: {
      alignItems: 'center',
      width: '40%'

   },
   opp2: {
      alignItems: 'center',
      width: '40%'

   },
   scores: {
      flexDirection: 'row',
      marginTop: 30
   },
   oppName: {
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 28,
      fontWeight: '700',
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10
   },
   vsCt: {
      width: '20%',
      padding: '10%',
      alignItems: 'center',
   },
   vs: {

      backgroundColor: '#fff',
      width: 35,
      height: 35,
      color: '#ef233c',
      fontSize: 15,
      fontWeight: 'bold',
      borderRadius: 50,
      marginTop: '10%',

      justifyContent: 'center',


   },
   vsText: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',

      textAlign: 'center'
   }
})