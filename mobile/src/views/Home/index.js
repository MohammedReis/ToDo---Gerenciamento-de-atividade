import {View,Text} from 'react-native';

import styles from './styles';

//COMPONENTES
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default function Home(){
    return( 
    <View style={styles.container}>
        <Header showNotifications={true} showBack={false}/>
        <Footer icon={'add'}/>
    </View>
    )
}