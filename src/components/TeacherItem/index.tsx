import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/CesarAugusto-ls.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Cesar Augusto</Text>
                    <Text style={styles.subject}>Quimica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Quimica avancada
                {'\n'}
                {'\n'}
                Tecnicas para elaboração de produtos para higienizacao e detetização de predios
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 210,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;