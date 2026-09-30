import { Fonts } from '@/constants/theme'
import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

interface Props {
    nome: string
    descricao: string
    img: string
}

export default function HotelCard({ nome, descricao, img }: Props) {
    return (
        
        <View style={styles.container}>
            <View style={styles.sellerGrupo}>
                <Image source={{ uri: img }} style={styles.imagemHotel}/>
                <Text style={styles.sellerNome}>{nome}</Text>
                <Text style={styles.sellerDescricao}>{descricao}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
  },

sellerGrupo: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#c2b2b2',
    borderRadius: 20,
    backgroundColor: '#4e2b22',
    padding: 20,
},

  imagemHotel: {
    width: "100%",
    height: 300,
    borderRadius: 30,
},

sellerNome: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#c2a3a3',
    fontFamily: 'Roboto'
},

sellerDescricao: {
    fontSize: 17,
    marginBottom: 10,
    color: '#a7a3a3',
    fontFamily: 'Arial',
},


})
