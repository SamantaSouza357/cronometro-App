import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      numero: 0,
      ultimoValor : null,
      botao: 'Iniciar'
    }

    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null

      this.setState({botao: 'Iniciar'})
    }else{
      this.timer = setInterval( () => {
        this.setState({numero : this.state.numero + 0.1})
      },100);

      this.setState({botao: 'Parar'})

    }
      
  }


  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      ultimoValor: this.state.numero,
      numero:0,
      botao: 'Iniciar'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./src/cronometro.png')} style={styles.img} />

          <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
              <Text style={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.areaUltima}>
              <Text style={styles.textoTempo}>
                 {this.state.ultimoValor > 0 ? 'Ultimo tempo:  ' + this.state.ultimoValor.toFixed(1) : ''}
                 </Text>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize:65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  botao:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height:40,
    margin : 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop:40
  },
  textoTempo:{
    fontSize:25,
    fontStyle: 'italic',
    color: '#FFF',
    fontWeight: 'bold'
  }
})




export default App;