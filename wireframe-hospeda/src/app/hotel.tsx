
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function index() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Hospeda</Text>
        </View>

        <Image style={styles.sellerImagem} source={{uri:"https://ferradurahotel.com.br/wp-content/uploads/2024/05/BLOG-9.png"}}/>
            
        <View style={styles.sellerCard}>
            <Text style={styles.sellerTitulo}>Hotel Centro</Text>
            <Text style={styles.sellerSobre}>Os hotéis são estabelecimentos maiores, que oferecem uma ampla gama de serviços e comodidades. Eles podem variar desde opções econômicas até luxuosas, com diferentes categorias de estrelas que indicam o nível de conforto e serviços oferecidos. <br>
            </br>Os hotéis geralmente têm recepção 24 horas, serviço de quarto, restaurantes, academias e, em alguns casos, centros de convenções e espaços para eventos.</Text>
            
            <TouchableOpacity style={styles.btnReservar}>
                <Text style={styles.btnText}>RESERVAR</Text>
            </TouchableOpacity>
        </View>

      


    </ScrollView>


  )
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  header: {
    backgroundColor: "#4e2b22",
    padding: 20,
  },

  headerText: {
    color: "#d1b9b9",
    fontWeight: 600,
    fontSize: 30, 
    marginLeft: 20,
    fontFamily: 'Roboto',
  },

  sellerCard: {
    margin: 25, 

  },

  sellerImagem: {
    width: '100%',
    height: 500,
  },

  sellerTitulo: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#c2a3a3',
    fontFamily: 'Roboto'
  },

  sellerSobre: {
    fontSize: 18,
    color: '#9b9696',
    fontFamily: 'Arial',

  },

  btnReservar: {
    backgroundColor: "#4e2b22",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 60,
    
  },

  btnText: {
    fontSize: 16,
    color: '#a7a3a3',
    fontWeight: 'bold'

  },

})
