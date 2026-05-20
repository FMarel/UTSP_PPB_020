import { View, Text, Image,ScrollView, StyleSheet} from 'react-native'

export default function DetailBarangScreen({ route}) {

  const { item } = route.params

  const isHilang =
    item.status?.toLowerCase() === 'hilang'

  return (

    <ScrollView style={styles.container}>

      {
        item.image_url &&
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
        />
      }

      <View style={styles.content}>

        <Text style={styles.title}>
          {item.nama_item}
        </Text>

        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor:
                isHilang
                  ? '#ffd6d6'
                  : '#d7ffd9'
            }
          ]}
        >

          <Text
            style={[
              styles.statusText,
              {
                color:
                  isHilang
                    ? 'red'
                    : 'green'
              }
            ]}
          >
            {item.status}
          </Text>

        </View>

        <View style={styles.card}>

          <View style={styles.detailItem}>

            <Text style={styles.label}>
              Nama Pelapor
            </Text>

            <Text style={styles.value}>
              {item.nama_laporan}
            </Text>

          </View>

          <View style={styles.detailItem}>

            <Text style={styles.label}>
              Kategori
            </Text>

            <Text style={styles.value}>
              {item.kategori}
            </Text>

          </View>

          <View style={styles.detailItem}>

            <Text style={styles.label}>
              Lokasi
            </Text>

            <Text style={styles.value}>
              {item.lokasi}
            </Text>

          </View>

          <View>
            <Text style={styles.label}>
              Deskripsi
            </Text>

            <Text style={styles.description}>
              {item.deskripsi}
            </Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  image: {
    width: '100%',
    height: 280
  },

  content: {
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15
  },

  statusContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginBottom: 25
  },

  statusText: {
    fontWeight: 'bold',
    fontSize: 15
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 3
  },

  detailItem: {
    marginBottom: 20
  },

  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 6
  },

  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111'
  },

  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333'
  }

})