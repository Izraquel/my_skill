import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

interface SkillCardProps {
  skillName: string;
  handleDeleteSkill: () => void;
}

export function SKillCard({ skillName, handleDeleteSkill }: SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      onPress={handleDeleteSkill}
    >
      <Text
        style={styles.textSkill}>
        {skillName}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
})