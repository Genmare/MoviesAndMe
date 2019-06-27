import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ViewItem from './ViewItem'

class Views extends React.Component {

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film " + idFilm)
        console.log(this.props)
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.viewsFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ViewItem 
                        film={item}
                        displayDetailForFilm={this._displayDetailForFilm}
                    />
                )}
            />
        )
    }

}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return {
      viewsFilm: state.toggleView.viewsFilm
    }
  }
  
  export default connect(mapStateToProps)(Views)
  