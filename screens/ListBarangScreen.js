import { View, Text, FlatList, TextInput,RefreshControl, StyleSheet} from 'react-native'
import { useEffect, useState} from 'react'
import { supabase } from '../services/supabase'
import ReportCard from '../components/ReportCard'

export default function ListBarangScreen({ navigation}) {

  const [reports, setReports] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  const [refreshing, setRefreshing] =
  useState(false)
  
  const getReports = async () => {

    const { data, error } =
      await supabase
        .from('laporan')
        .select('*')
        .order('id', { ascending: false })

    if (error) {
      setError(error.message)
      return
    }

    setReports(data)
  }

  useEffect(() => {
    getReports()
  }, [])

  const onRefresh = async () => {
  setRefreshing(true)
  await getReports()
  setRefreshing(false)
}

  const filteredData = reports.filter(item =>
    item.nama_item
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        List Barang
      </Text>

      <TextInput
        placeholder="Cari barang..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      {
        error !== '' &&
        <Text style={styles.errorText}>
          {error}
        </Text>
      }

      {
        filteredData.length === 0 &&
        <Text style={styles.emptyText}>
          Data kosong
        </Text>
      }

    <FlatList
    data={filteredData}

    refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />
    }

    keyExtractor={(item) =>
        item.id.toString()
    }

    showsVerticalScrollIndicator={false}

    contentContainerStyle={
        styles.listContainer
    }

    renderItem={({ item }) => (

        <ReportCard
        item={item}
        onPress={() =>
            navigation.navigate(
            'Detail Barang',
            { item }
            )
        }
        />

        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 20
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    fontSize: 15
  },

  listContainer: {
    paddingBottom: 20
  },

  errorText: {
    color: 'red',
    marginBottom: 15
  },

  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 30,
    fontSize: 16
  }

})