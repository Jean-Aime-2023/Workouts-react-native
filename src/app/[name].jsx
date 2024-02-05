import { Text, View, StyleSheet } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import { Stack, useLocalSearchParams } from 'expo-router';


export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'Hello'}} />
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{exercise.muscle}</Text> |{' '}
        <Text style={styles.subValue}>{exercise.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
     padding:10,
    },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,
    marginTop: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
  subValue: {
    textTransform: 'capitalize',
  },
});
