import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Button, TextInput } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    weight: 0,
    height: 0,
    imc: 0,
    diagnostic: 'Indeterminado',
    cor: '#bdc3c7',
  };

  calcularIMC = () => {
    const results = this.state.weight / (this.state.height * this.state.height);

    this.setState({
      imc: Math.ceil(results),
    });

    if (results < 18.5) {
      this.setState({
        diagnostic: 'Magreza',
        cor: '#e73c3c',
      });
    } else if (results >= 18.5 && results < 25) {
      this.setState({
        diagnostic: 'Normal',
        cor: '#2ecc71',
      });
    } else if (results >= 25 && results < 30) {
      this.setState({
        diagnostic: 'Sobrepeso',
        cor: '#f1c40f',
      });
    } else if (results >= 30 && results < 40) {
      this.setState({
        diagnostic: 'Obesidade',
        cor: '#e67e22',
      });
    } else if (results >= 40) {
      this.setState({
        diagnostic: 'Obesidade Grave',
        cor: '#e74c3c',
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.legend}>Seu IMC</Text>
        <View style={[styles.results, { backgroundColor: this.state.cor }]}>
          <Text style={styles.imc}>{this.state.imc}</Text>
          <Text style={styles.diagnostic}>{this.state.diagnostic}</Text>
        </View>

        <View>
          <TextInput
            style={styles.weight}
            label="Peso"
            onChangeText={(valor) => {
              this.setState({ weight: valor.replace(',', '.') });
            }}
          />
          <TextInput
            style={styles.height}
            label="Altura"
            onChangeText={(valor) => {
              this.setState({ height: valor.replace(',', '.') });
            }}
          />
        </View>
        <Button title="Calcular" onPress={this.calcularIMC}>
          Calcular
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50,
  },
  legend: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 38,
  },
  results: {
    borderRadius: 5,
    width: '65%',
    marginVertical: 10,
    padding: 20,
    alignSelf: 'center',
  },
  imc: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostic: {
    textAlign: 'center',
    fontSize: 18,
  },
  weight: {
    marginVertical: 10,
  },
  height: {
    marginVertical: 10,
  },
});
