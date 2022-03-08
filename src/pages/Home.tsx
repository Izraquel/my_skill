import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { Button } from '../components/Button'
import { SKillCard } from '../components/SkillCard'

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()), //converte para data atual
      name: newSkill
    }
    // spread operator
    setMySkills([...mySkills, data])  //imutabilidade - copia e adiciona
    setNewSkill('')
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Raquel Lindona</Text>

        <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#eee'
          value={newSkill}
          onChangeText={value => setNewSkill(value)}
        />

        <Button 
          handleAddNewSkill={handleAddNewSkill}
          title='Incluir'
        />

        <Text style={[styles.title, { marginVertical: 20 }]}>
          MySkills
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills} //todas as info que queremos listar
          keyExtractor={item => item.id}  //qual item não vai se repetir 
          renderItem={({ item }) => (
            <SKillCard />
            )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
 
  
})