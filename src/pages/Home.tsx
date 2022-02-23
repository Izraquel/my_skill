import React, { useDebugValue, useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSKill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime), //converte para data atual
      name: newSkill
    }
    setMySkills([...mySkills, data]) //imutabilidade - copia e adiciona

  }


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Raquel Lindona

        </Text>

        <TextInput
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#eee'
          onChangeText={value => setNewSKill}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewSkill} //quando pressionar o botão add
        >
          <Text style={styles.buttonText} >
            Add
          </Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginVertical: 20 }]}>
          My Skills
        </Text>

        {
          mySkills.map((skill, indice) => (
            <TouchableOpacity style={styles.listButton}
            key={skill.id}>
              <Text style={styles.title}>
                {skill.name}
              </Text>
            </TouchableOpacity>
          ))
        }
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
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    textAlign: 'center',
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  listButton: {
    backgroundColor: '#eee'
    
  }


})