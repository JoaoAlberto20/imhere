import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João']

  const handleParticipantAdd = () => {
    if(participants.includes('Rodrigo')) {
      return Alert.alert('Participante Exite', 'Já exite um participante  na lista com esse nome ')
    }
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participant ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.eventName}
      >
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participates a sua lista de presença
          </Text>
        )}
      />
    </View>
  )
}