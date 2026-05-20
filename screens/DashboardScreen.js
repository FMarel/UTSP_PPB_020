import { View, Text, StyleSheet} from 'react-native'
import CustomButton from '../components/CustomButton'

export default function DashboardScreen({
  navigation
}) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        FIND IT
      </Text>

      <Text style={styles.subtitle}>
        Aplikasi Laporan Barang Hilang dan Ditemukan
      </Text>

      <View style={styles.buttonContainer}>

        <CustomButton
          title="Tambah Laporan"
          onPress={() =>
            navigation.navigate('Tambah Laporan')
          }
        />

        <CustomButton
          title="List Barang"
          onPress={() =>
            navigation.navigate('List Barang')
          }
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5'
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111',
    marginBottom: 10
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    marginBottom: 40
  },

  buttonContainer: {
    gap: 10
  }

})