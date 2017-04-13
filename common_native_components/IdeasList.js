import React from "react";
import {View, ListView, Text, StyleSheet, StatusBar} from 'react-native';
import IdeaItem from './IdeaItem'

class IdeasList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.ideas) {
            const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.ideas);
            return (
                <View style={styles.container}>
                    <ListView
                        dataSource={dataSource}
                        backgroundColor="#FFFFFF"
                        renderRow={(idea) => <IdeaItem idea={idea} />}
                        renderSeparator={() => <View style={{backgroundColor:"#000000", height:1}} />}
                    />
                </View>
            );
        }
    }


}

IdeasList.propTypes = {
    ideas: React.PropTypes.array
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
});

export default IdeasList;

