import { Link } from 'expo-router'
import React from 'react'
import HotelCard  from '@/components/HotelCard'

import {FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const POUSADAS = [
  {id: 1, nome: "Pousada do Mar", descricao: "Quartos Simples a poucos passos da praia.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ef/dc/dd/pousada-porto-do-sol.jpg?w=900&h=-1&s=1"},
  {id: 2, nome: "Hotel Centro", descricao: "No coração da cidade, perto de tudo.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ef/dc/dd/pousada-porto-do-sol.jpg?w=900&h=-1&s=1"},
  {id: 3, nome: "Casa da Serra", descricao: "Chalés tranquilos cercados de verde.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ef/dc/dd/pousada-porto-do-sol.jpg?w=900&h=-1&s=1"},
  {id: 4, nome: "Campo do Amor", descricao: "Chalés românticos e calmos para casais.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ef/dc/dd/pousada-porto-do-sol.jpg?w=900&h=-1&s=1"},
]

export default function index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hospeda</Text>
      </View>


    <Link href={'/hotel'} asChild>
      <TouchableOpacity>
      
        <FlatList
        data={POUSADAS}
        scrollEnabled={false}
        renderItem={({item})=> (
          <HotelCard
          nome={item.nome}
          descricao={item.descricao}
          img={item.img}/>
        )}/>
      </TouchableOpacity>

    </Link>
  

    </ScrollView>

  )
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1
  },

  header: {
    backgroundColor: "#4e2b22",
    padding: 20,
    marginBottom: 30,
  },

  headerText: {
    color: "#d1b9b9",
    fontWeight: 600,
    fontSize: 30, 
    marginLeft: 20,
    fontFamily: 'Roboto',
  },

})
