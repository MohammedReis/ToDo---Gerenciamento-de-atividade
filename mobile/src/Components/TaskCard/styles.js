import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'90%',
        padding: 10,
        marginVertical:10,
        height:80,
        borderColor: '#000',
        borderWidth:1,
        borderRadius: 5,
    },
    
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    typeActive:{
        width:50,
        height:50,
    },
    cardTitle:{
        marginLeft:10,
        fontWeight:'bold',
    },
    cardRight:{
        alignItems:'flex-end',
        justifyContent: 'space-between',
    },
    cardDate:{
        color:'#ee6b26',
        fontWeight:'bold',
    },
    cardTime:{
        color:'#707070',
    },
    cardDone:{
        opacity: 0.5,
    },
});

export default styles;