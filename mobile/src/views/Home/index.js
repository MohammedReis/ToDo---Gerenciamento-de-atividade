import {View,Text} from 'react-native';

import styles from './styles';

//COMPONENTES
import Header from '../../Components/Header';

export default function Home(){
    return( 
    <View style={styles.container}>
        <Header showNotifications={true} showBack={false}/>
    </View>
    )
}