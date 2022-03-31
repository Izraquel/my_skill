import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

interface ButtonProps {
  handleAddNewSkill?: () => void
  title: string
}

export function Button({ handleAddNewSkill, title }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddNewSkill} //quando pressionar o botão add
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    // marginBottom:7,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})