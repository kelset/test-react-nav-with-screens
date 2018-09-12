import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

import { Circle, Shape } from '../components/Shapes'

export const Screen1 = props => (
  <SafeAreaView style={styles.container}>
    <Transition appear="flip">
      <Text>1.FluidScreen</Text>
    </Transition>
    <View style={styles.screen1}>
      <Transition shared="circle">
        <Shape size={50} borderRadius={4} background="#EE0000" />
      </Transition>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
    </View>
    <Transition appear="horizontal">
      <View style={styles.buttons}>
        <Button
          title="Next"
          onPress={() => props.navigation.navigate('screen2')}
        />
      </View>
    </Transition>
  </SafeAreaView>
)

export const Screen2 = props => (
  <SafeAreaView style={styles.container}>
    <Transition appear="flip">
      <Text>2.FluidScreen</Text>
    </Transition>
    <View style={styles.screen2}>
      <Transition shared="circle">
        <Shape size={50} borderRadius={25} background="#EE0000" />
      </Transition>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
    </View>
    <Transition appear="horizontal">
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
        <View style={{ width: 20 }} />
        <Button
          title="Next"
          onPress={() => props.navigation.navigate('screen3')}
        />
      </View>
    </Transition>
  </SafeAreaView>
)

export const Screen3 = props => (
  <SafeAreaView style={styles.container}>
    <Transition appear="flip">
      <Text>3.FluidScreen</Text>
    </Transition>
    <View style={styles.screen3}>
      <Transition shared="circle">
        <Shape size={140} borderRadius={4} background="#EE0000" />
      </Transition>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
      <View style={{ width: 20 }} />
      <Transition appear="horizontal" delay>
        <Circle background="#55AA55" size={20} />
      </Transition>
    </View>
    <Transition appear="horizontal">
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
      </View>
    </Transition>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  screen1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 20,
  },
  screen2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
  screen3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    padding: 20,
  },
})
