/*

import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function NovaChamadaScreen() {
  const [turma, setTurma] = useState('');
  const [data, setData] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'Bruno Guilherme', presente: false, obs: '' },
    { id: 2, nome: 'Ryan de Castro', presente: true, obs: '' }
  ]);

  const presence = (id) => {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ));
  };

  const collectivePresence = () => {
    setAlunos(alunos.map(aluno => ({ ...aluno, presente: true })));
  };

  const removePresences = () => {
    setAlunos(alunos.map(aluno => ({ ...aluno, presente: false })));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Chamada</Text>

      <RNPickerSelect
        onValueChange={setTurma}
        placeholder={{ label: 'Turma', value: null }}
        items={[{ label: 'Informática A', value: 'ia' }]}
        style={pickerSelectStyles}
      />

      <RNPickerSelect
        onValueChange={setData}
        placeholder={{ label: 'Data', value: null }}
        items={[{ label: '24 de abril de 2025', value: '2025-04-24' }]}
        style={pickerSelectStyles}
      />

      <RNPickerSelect
        onValueChange={setDisciplina}
        placeholder={{ label: 'Disciplina', value: null }}
        items={[{ label: 'Matemática', value: 'matematica' }]}
        style={pickerSelectStyles}
      />

      <Button mode="contained" style={styles.searchButton}>Buscar</Button>

      <Text style={styles.subTitle}>Alunos</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentRow}>
            <Text>{item.id}. {item.nome}</Text>
            <Checkbox
              status={item.presente ? 'checked' : 'unchecked'}
              onPress={() => presence(item.id)}
            />
          </View>
        )}
      />

    

      <View style={styles.buttons}>
        <Button mode="outlined" onPress={collectivePresence}>
          Presença coletiva
        </Button>

        <Button mode="contained-tonal" buttonColor="#b91c1c" textColor="#fff" onPress={removePresences}>
          Remover presenças
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20
  },
  searchButton: {
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#2563eb'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: 16
  },
  buttons: {
    gap: 10
  }
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    marginBottom: 12
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 10,
    color: 'black',
    marginBottom: 12
  }
};

*/


/*
PAGINA HOME

import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';


export default function HomeScreen() {
  const professor = 'Paulo';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a),{'\n'}Professor(a) {professor}!</Text>

      <View style={styles.buttonRow}>
        <Button
          mode="contained"
          icon="clipboard-check"
          contentStyle={styles.iconButton}
          labelStyle={styles.buttonLabel}
          style={styles.button}
          onPress={() => {}}
        >
          Nova chamada
        </Button>

        <Button
          mode="contained"
          icon="account-group"
          contentStyle={styles.iconButton}
          labelStyle={styles.buttonLabel}
          style={styles.button}
          onPress={() => {}}
        >
          Minhas {'\n'} turmas
        </Button>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    padding: 30
  },
  iconButton: {
    flexDirection: 'column',
    height: 100,
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 20
  },
});

*/










import { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, TextInput, Button, Checkbox } from 'react-native-paper';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.circle} />
        <Text style={styles.title}>Entre em sua{'\n'}conta</Text>
        <Text style={styles.subtitle}>Digite seu email e senha para Login</Text>
      </View>

      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={secureText}
          right={
            <TextInput.Icon
              icon={secureText ? 'eye-off' : 'eye'}
              onPress={() => setSecureText(!secureText)}
            />
          }
          style={styles.input}
          mode="outlined"
        />

        <View style={styles.checkbox}>
          <Checkbox
            status={lembrar ? 'checked' : 'unchecked'}
            onPress={() => setLembrar(!lembrar)}
          />
          <Text style={styles.checkboxLabel}>Lembrar sempre</Text>
        </View>

        <Button mode="contained" style={styles.button}>
          Entrar
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    backgroundColor: '#2468F3',
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 15,
    elevation: 4,
  },
  input: {
    marginBottom: 16,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  button: {
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: '#2468F3',
    marginBottom: 15,
  },
});

