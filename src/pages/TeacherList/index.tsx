import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles'

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = React.useState(true);
    const [subject, setSubject] = React.useState('');
    const [week_day, setWeekDay] = React.useState('');
    const [time, setTime] = React.useState('');
    const [teachers, setTeachers] = React.useState([])

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
        handleToggleFiltersVisible();
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather
                            name='filter'
                            size={20}
                            color="#FFF"
                        />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Máteria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor='#c1bccc'
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor='#c1bccc'
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor='#c1bccc'
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher, index) => {
                    return <TeacherItem key={index} teacher={teacher} />
                })
                }
            </ScrollView>
        </View>
    );
}

export default TeacherList;