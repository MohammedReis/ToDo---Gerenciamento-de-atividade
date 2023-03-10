import {View,Text,Image,TouchableOpacity} from 'react-native';
import {format} from 'date-fns'


import styles from './styles';

//COLEÇÃO DE ICONES
import TypeIcons from '../../utils/TypeIcons';

export default function TaskCard({done,title,when,type}){
    return(
        <TouchableOpacity style={[styles.card,done && styles.cardDone]}>
            <View style={styles.cardLeft}>
                <Image source={TypeIcons[type]} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(when),'HH:mm')}</Text>
            </View>
        </TouchableOpacity>
    )
}