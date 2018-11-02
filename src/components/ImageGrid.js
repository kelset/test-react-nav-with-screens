import React from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'
import chunk from 'lodash.chunk'
import { Transition } from 'react-navigation-fluid-transitions'
import { FlatList } from 'react-navigation'

const MARGIN = 10

export class ImageGrid extends React.Component {
  _photoSize

  _margin

  _chunkedImages

  constructor(props) {
    super(props)
    const colCount = props.numOfColumns
    const { width: windowWidth } = Dimensions.get('window')
    this._photoSize = (windowWidth - MARGIN * colCount * 2) / colCount
    this.state = { chunkedImages: chunk(props.images, colCount), colCount }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      chunkedImages: chunk(nextProps.images, prevState.colCount),
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.chunkedImages}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem.bind(this)}
      />
    )
  }

  keyExtractor(item, index) {
    return `key_${index}`
  }

  renderItem(item) {
    return (
      <View style={styles.row}>
        {item.item.map(this.renderCell.bind(this))}
      </View>
    )
  }

  renderCell(image) {
    return (
      <TouchableOpacity
        onPress={() => this.props.imageSelected(image)}
        key={image.url}
      >
        <View style={styles.cell}>
          <Transition shared={image.url}>
            <Image
              resizeMode="cover"
              source={{ uri: image.url }}
              style={{ width: this._photoSize, height: this._photoSize }}
            />
          </Transition>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: MARGIN,
  },
})
