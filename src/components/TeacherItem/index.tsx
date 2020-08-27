import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

interface TeacherItemProps {
    teacher: {
        id: number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        user_id: number,
        whatsapp: string,
    }
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: props.teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{props.teacher.name}</Text>
                    <Text style={styles.subject}>{props.teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {props.teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ {props.teacher.cost}</Text>
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