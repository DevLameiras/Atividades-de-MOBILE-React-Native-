
import React, { useState} from 'react';
import {View, TextInput, Button } from 'react-native';
import { styles } from './Styles/style'
const App = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');
  const [saida, setSaida] = useState('') //variavel criada para desviar o valor da variavel 'resultado' sendo usada apenas para saida do resultado da conta
  const [bloqueio, setBloqueio] = useState(true) //Variavel criada para controlar o estado do bloqueio do botão





  const calcularSoma = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 + num2); // Converte o resultado para string
      setBloqueio(false) //desbloqueia o botão
    } else {
      setResultado('Entrada inválida');
    }
  };

    const calcularSubtracao = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);



    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado((num1 - num2).toString()); // Converte o resultado para string
      setBloqueio(false) //desbloqueia o botão
    } else {
      setResultado('Entrada inválida');
    }
  };

    const calcularMultiplicacao = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
    setResultado((num1 * num2).toString()); // Converte o resultado para string
    setBloqueio(false) //desbloqueia o botão
    } else {
      setResultado('Entrada inválida');
    }
  };

    const calcularDivisao = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado((num1 / num2).toString()); // Converte o resultado para string
      setBloqueio(false) //desbloqueia o botão
    } else {
      setResultado('Entrada inválida');
    }
  };

const monstrarSaida = () => {
setSaida(resultado) //Pega o resultado da conta e exibe no input.
setBloqueio(true) //bloqueia o botão
}


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      

<View style={styles.botao}>
      <Button color = '#000080' title="+" onPress={calcularSoma} />
      <Button color = '#ff0000'  title="-" onPress={calcularSubtracao} />
      <Button color = '#fe9c22' title="X" onPress={calcularMultiplicacao} />
      <Button color = '#76007e'  title="/" onPress={calcularDivisao} />
 </View>
      <TextInput 
        style={styles.input}
        placeholder="Resultado"
        value={saida}
        editable={false} // Torna o campo somente leitura
      />


      <Button  title="Calcular" onPress={monstrarSaida} disabled={bloqueio} />
    </View>
  );
};



export default App;