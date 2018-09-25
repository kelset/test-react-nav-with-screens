import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

import { ImageGrid } from '../components/ImageGrid'

export class ImageListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const items = []
    const size = Dimensions.get('window').width
    const max = 24
    const randMax = 100
    for (let i = 0; i < max; i++) {
      let randomNumber = Math.floor(Math.random() * randMax + 1)
      const idExists = e => e.id === randomNumber
      while (items.findIndex(idExists) > -1) {
        randomNumber = Math.floor(Math.random() * randMax + 1)
      }

      items.push({
        url: `https://picsum.photos/${size}/${size}?image=${randomNumber}`,
        id: randomNumber,
      })
    }
    this.setState({ ...this.state, items })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageGrid
          numOfColumns={1}
          images={this.state.items}
          imageSelected={image =>
            this.props.navigation.navigate('imageDetails', { url: image.url })
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
