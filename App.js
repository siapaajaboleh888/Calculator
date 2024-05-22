import React, { Component } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hitung: 0,
         };
    }

     masukkanAngka = (value) => {
        if(this.state.hitung == 0)
            {
                this.setState({hitung: value})
            }
            else{
                this.setState({hitung: this.state.hitung +  '' + value });
            }
     }

     hitungHasil = () => {
        let hasil = eval(this.state.hitung);
        this.setState({hitung: hasil})
     }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#212121'}}>
              <StatusBar backgroundColor= '#212121' barStyle="light-content" />
                
<View style={{flex: 0.9, justifyContent: 'center' }}>
    <Text style={{color: '#FFFFFF', fontSize: 48, textAlign: 'right', padding: 10}}>{this.state.hitung}</Text>
</View>
            <View style={{flex: 0.9, justifyContent: 'center', marginHorizontal: 10}}>

            </View>

<TouchableOpacity style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.setState({hitung: 0})}>
    <Text style={{color: '#FFFFFF', fontSize: 40, textAlign: 'center', padding: 10}}>C</Text>
</TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka('(')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>(</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(')')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>)</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka('/')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>/</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
  onPress={() => this.masukkanAngka('*')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>X</Text>
  </TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(7)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>7</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(8)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>8</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(9)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>9</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
  onPress={() => this.masukkanAngka('+')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>+</Text>
  </TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(4)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>4</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(5)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>5</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(6)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>6</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
  onPress={() => this.masukkanAngka('-')}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>-</Text>
  </TouchableOpacity>
</TouchableOpacity>
<TouchableOpacity style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
  onPress={() => this.masukkanAngka(1)}
>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>1</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(2)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>2</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(3)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>3</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
  onPress={() => this.hitungHasil()}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>=</Text>
  </TouchableOpacity>
  </TouchableOpacity>
  <View style={{flexDirection: 'row',  }}>
<TouchableOpacity style={{flex: 1, justifyContent: 'center' }}
onPress={() => this.masukkanAngka(0)}>
    <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 10}}>0</Text>
</TouchableOpacity>
  </View>
</View>
        );
    }
}

export default App;