import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from '../components/Button'
import { SKillCard } from '../components/SkillCard'

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])
  const [greetings, setGreetings] = useState('Boa noite')
  const [status, setStatus] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()), //converte para data atual
      name: newSkill
    }
    // spread operator
    setMySkills([...mySkills, data])  //imutabilidade - copia e adiciona
    setNewSkill('')
    setStatus('I')
  }

  function handleDeleteSkill(id: string) {
    setMySkills(mySkill => mySkill.filter(skill => skill.id !== id));
    setStatus('E')
  } // exemplo:
  // {10:1, name: JS}
  // {10:2, name: TS} array que será excluído
  // {10:3, name: React}

  // pega o estado do id atual (ex.: 2), faz um filtro com todos os outros diferente 
  // e exclui o que ele recebe,no caso (2)

  useEffect(() => {
    let currentHour = new Date().getHours()
    currentHour = 1
    console.log(currentHour);

    //testar hora
    //currentHour= 19

    if (currentHour < 12) {
      setGreetings('Bom dia')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Boa tarde')
    } else if (currentHour >= 18 && currentHour < 24) {
      setGreetings('Boa noite')
    }
    //console.log("UseEffect executado");
  }, [])

  useEffect(() => {
    async function saveSkills() {
      await AsyncStorage.setItem('@myskills:skills', JSON.stringify(mySkills))
    }
    if (mySkills.length > 0 || status === 'E') {
      saveSkills()
    }

  }, [mySkills])

  useEffect(() => {
    async function loadSkills() {
      const storagedSkills = await AsyncStorage.getItem('@myskills:skills')
      if (storagedSkills) {
        setMySkills(JSON.parse(storagedSkills))
      }
    }
    loadSkills()
  }, [])


  return (

    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Raquel Lindona</Text>

        <Text style={styles.greetings}>
          {greetings}
        </Text>

        <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#eee'
          value={newSkill}
          onChangeText={value => setNewSkill(value)}
        />

        <Button
          handleAddNewSkill={handleAddNewSkill}
          title='Add'
        />

        <Text style={[styles.title, { marginVertical: 20 }]}>
          MySkills
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills} //todas as info que queremos listar
          keyExtractor={item => item.id}  //qual item não vai se repetir 
          renderItem={({ item }) => (
            <SKillCard skillName={item.name}
              handleDeleteSkill={() => handleDeleteSkill(item.id)}
            />
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
  greetings: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 3
  }


})