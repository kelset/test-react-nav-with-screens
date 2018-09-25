import React from 'react'
import { View, Text, Dimensions, Button, Image, StyleSheet } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

export class ImageDetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props
    const uri = navigation.getParam('url', '')
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Transition shared={uri}>
            <Image style={styles.detailsImage} source={{ uri }} />
          </Transition>
        </View>
        <Transition anchor={uri}>
          <View style={styles.detailsView}>
            <Text style={styles.text}>{uri}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </Transition>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.5,
  },
  detailsView: {
    padding: 10,
    backgroundColor: '#ECECEC',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    paddingBottom: 40,
  },
  imageContainer: {
    flexDirection: 'row',
  },
})
