import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'
import moment from 'moment'

class ViewItem extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)
        this.date = 'Sorti le '+ moment(new Date(this.props.film.release_date)).format('DD/MM/YYYY')
        this.state = {
            title: props.film.title
        }
    }

    _displayDate() {
        if( this.state.title === this.props.film.title ){
            this.setState({ title: this.date })
        } else {
            this.setState({ title: this.props.film.title })
        }
    }
    

    render() {
        return (
            <FadeIn>
                <TouchableOpacity
                    style={styles.film_container}
                    onPress={() => this.props.displayDetailForFilm(this.props.film.id)}
                    onLongPress={() => this._displayDate()}
                    >
                    <Image
                        style={styles.image}
                        source={{uri: getImageFromApi(this.props.film.poster_path)}}
                    />
                    <View style={styles.content_container}>
                        <Text style={styles.title_text}>{this.state.title}</Text>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    film_container: {
        flexDirection: 'row',
        margin: 10
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    },
    title_text: {
        fontSize: 15,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 13,
        marginBottom: 10,
        color: '#000000'
    }
})


export default ViewItem