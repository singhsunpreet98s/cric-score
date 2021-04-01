
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Table, Row } from 'react-native-table-component'
import { pageStyle } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { firebaseConfig } from './conifg'
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [othrData, setOthrData] = useState([])

  const [prevCmt, setPrevCmt] = useState('')
  useEffect(() => {
    setLoading(true)
    const myItems = firebase.database().ref('appData');
    const other = firebase.database().ref('other');
    myItems.on('value', datasnap => {
      setData(datasnap.val())
      setLoading(false)
    })
    other.on('value', datasnap => {
      setOthrData(datasnap.val())
      setLoading(false)
    })



  }, [])
  const pulse = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.25: {
      opacity: 0.5,
      scale: 0.5
    },
    0.50: {
      opacity: 0.2,
      scale: 2
    },
    0.75: {
      opacity: 0.5,
      scale: 0.5
    },
    1: {
      opacity: 1,
      scale: 1
    }
  }
  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const tableData = [
    'player', 'score', 'balls'
  ]
  if (loading || data.length === 0) {
    return <View style={{ flex: 1, marginTop: '10%', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#ef233c" />
    </View>
  }
  else {
    return (
      <View style={pageStyle.mainContainer}>
        <View style={pageStyle.view1}>
          <View style={pageStyle.header}>
            <View style={pageStyle.matchHeading}>
              <Text style={pageStyle.title}>{data.title}</Text>
            </View>
            {(data.live) &&
              <View style={pageStyle.live}>
                <Animatable.View animation={pulse} iterationCount="infinite" duration={2000} style={
                  pageStyle.dot
                }>

                </Animatable.View>
                <Text style={pageStyle.tx1}>Live</Text>
              </View>
            }
          </View>

          <View style={pageStyle.scores}>
            <View style={pageStyle.opp1}>

              <Image
                style={pageStyle.flag}
                source={{
                  uri: data.flagA
                }}
              />
              <Text style={pageStyle.oppName}>{data.teamAName.slice(0, 3)}</Text>
              <Text style={pageStyle.scoret}>{data.scoreA}</Text>
              <Text style={pageStyle.over}>( {data.overA} Overs )</Text>
            </View>
            <View style={pageStyle.vsCt}>
              <View style={pageStyle.vs}>
                <Text style={pageStyle.vsText}>VS</Text>
              </View>
            </View>
            <View style={pageStyle.opp2}>
              <Image
                style={pageStyle.flag}
                source={{
                  uri: data.flagB
                }}
              />
              <Text style={pageStyle.oppName}>{data.teamBName.slice(0, 3)}</Text>
              <Text style={pageStyle.scoret}>{data.scoreB}</Text>
              <Text style={pageStyle.over}>( {data.overB} Overs )</Text>
            </View>
          </View>

        </View>
        <View style={pageStyle.view3}>
          <ScrollView>
            <View>
              {
                (prevCmt !== othrData.commentry) ?
                  <Animatable.Text animation={zoomOut} iterationCount={1} style={{ padding: 20, color: '#ef233c', fontSize: 20 }}
                    onAnimationEnd={() => {
                      setPrevCmt(othrData.commentry)
                    }}
                  >
                    {othrData.commentry}
                  </Animatable.Text> :
                  <Text style={{ padding: 20, color: '#ef233c', fontSize: 20 }}>{othrData.commentry}</Text>
              }
            </View>
            <Table>
              <View style={pageStyle.v3v1}>
                <Text style={pageStyle.v3txt}>Batting Team</Text>
              </View>

              <Row data={tableData} textStyle={pageStyle.tab} style={pageStyle.tabl} />
              <Row data={[`${data.currBat.pName} 🏏`, `${data.currBat.score}`, `${data.currBat.balls}`]} textStyle={pageStyle.tab} style={pageStyle.tabl1} />
              <Row data={[`${data.batsMan2.pname}`, `${data.batsMan2.score}`, `${data.batsMan2.balls}`]} textStyle={pageStyle.tab} style={pageStyle.tabl1} />
              <View style={pageStyle.v3v1}>

                <Text style={pageStyle.v3txt}>Bowler </Text>
              </View>
              <Row data={['palyer', 'wicket', 'ball']} textStyle={pageStyle.tab} style={pageStyle.tabl} />
              <Row data={[` ${data.bowler.name}⚾`, `${data.bowler.wicket}`, `${data.bowler.balls}`]} textStyle={pageStyle.tab} style={pageStyle.tabl1} />
            </Table>
          </ScrollView>

        </View>
        <View style={pageStyle.view4}>
          <View style={{ padding: 10, flex: 1 }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>MarketRate</Text>
          </View>
          <View style={{ width: 30, backgroundColor: 'white', height: 30, marginTop: 5, marginRight: 5, borderRadius: 6, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: 'red' }}>{othrData.mr1}</Text>
          </View>
          <View style={{ width: 30, backgroundColor: 'white', height: 30, marginTop: 5, marginRight: 5, borderRadius: 6, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: 'red' }}>{othrData.mr2}</Text>
          </View>
        </View>
        {
          (data.advt) &&
          (<View style={pageStyle.view5}>
            <Text style={{ color: 'white' }}>add here</Text>
          </View>)
        }
      </View>
    );
  }
}


