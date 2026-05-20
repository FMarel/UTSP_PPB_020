import { View, Text, TextInput, ScrollView, Alert, Image, StyleSheet} from 'react-native'
import { useState, useRef } from 'react'
import { Picker } from '@react-native-picker/picker'
import CustomButton from '../components/CustomButton'
import { supabase } from '../services/supabase'
import { CameraView, useCameraPermissions} from 'expo-camera'

export default function TambahLaporanScreen() {

  const [reporterName, setReporterName] = useState('')
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState(null)

  const [openCamera, setOpenCamera] = useState(false)

  const [permission, requestPermission] =
    useCameraPermissions()

  const cameraRef = useRef(null)

  const isValid =
    itemName.length >= 3 &&
    description.length >= 20

  const takePicture = async () => {

    if (cameraRef.current) {

      const photoData =
        await cameraRef.current?.takePictureAsync()

      setPhoto(photoData.uri)

      setOpenCamera(false)
    }
  }

  const saveReport = async () => {

    const { error } = await supabase
      .from('laporan')
      .insert([
        {
          nama_laporan: reporterName,
          nama_item: itemName,
          kategori: category,
          lokasi: location,
          status: status,
          deskripsi: description,
          image_url: photo
        }
      ])

    if (error) {
      Alert.alert('Error', error.message)
      return
    }

    Alert.alert(
      'Sukses',
      'Laporan berhasil disimpan'
    )

    setReporterName('')
    setItemName('')
    setCategory('')
    setLocation('')
    setStatus('')
    setDescription('')
    setPhoto(null)
  }

  if (openCamera) {

    if (!permission?.granted) {
      requestPermission()
    }

    return (

      <View style={styles.cameraContainer}>

        <CameraView
          ref={cameraRef}
          style={styles.camera}
        />

        <View style={styles.cameraButtonContainer}>

          <CustomButton
            title="Ambil Foto"
            onPress={takePicture}
          />

        </View>

      </View>
    )
  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Tambah Laporan
      </Text>

      <Text style={styles.label}>
        Nama Pelapor
      </Text>

      <TextInput
        placeholder="Masukkan nama pelapor"
        value={reporterName}
        onChangeText={setReporterName}
        style={styles.input}
      />

      <Text style={styles.label}>
        Nama Barang
      </Text>

      <TextInput
        placeholder="Masukkan nama barang"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />

      <Text style={styles.label}>
        Kategori
      </Text>

      <View style={styles.pickerContainer}>

        <Picker
          selectedValue={category}
          onValueChange={(itemValue) =>
            setCategory(itemValue)
          }
        >

          <Picker.Item
            label="Pilih Kategori"
            value=""
          />

          <Picker.Item
            label="Elektronik"
            value="Elektronik"
          />

          <Picker.Item
            label="Dokumen"
            value="Dokumen"
          />

          <Picker.Item
            label="Aksesoris"
            value="Aksesoris"
          />

          <Picker.Item
            label="Pakaian"
            value="Pakaian"
          />

          <Picker.Item
            label="Lainnya"
            value="Lainnya"
          />

        </Picker>

      </View>

      <Text style={styles.label}>
        Lokasi
      </Text>

      <TextInput
        placeholder="Masukkan lokasi"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Text style={styles.label}>
        Status
      </Text>

      <View style={styles.pickerContainer}>

        <Picker
          selectedValue={status}
          onValueChange={(itemValue) =>
            setStatus(itemValue)
          }
        >

          <Picker.Item
            label="Pilih Status"
            value=""
          />

          <Picker.Item
            label="Hilang"
            value="Hilang"
          />

          <Picker.Item
            label="Ditemukan"
            value="Ditemukan"
          />

        </Picker>

      </View>
      <Text style={styles.label}>
        Deskripsi
      </Text>

      <TextInput
        multiline
        placeholder="Masukkan deskripsi"
        value={description}
        onChangeText={setDescription}
        style={styles.textArea}
      />

      <Text style={styles.charText}>
        {description.length}/20 karakter
      </Text>

      <CustomButton
        title="Buka Kamera"
        onPress={() => setOpenCamera(true)}
      />

      {
        photo &&
        <Image
          source={{ uri: photo }}
          style={styles.previewImage}
        />
      }

      
      <CustomButton
        title="Simpan Laporan"
        onPress={saveReport}
        disabled={!isValid}
      />

      <View style={styles.bottomSpace} />

    </ScrollView>
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
    marginBottom: 25,
    color: '#111'
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    fontSize: 15
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 18,
    overflow: 'hidden'
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    height: 130,
    textAlignVertical: 'top',
    marginBottom: 5,
    fontSize: 15
  },

  charText: {
    color: 'gray',
    marginBottom: 20
  },

  previewImage: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginVertical: 20
  },

  cameraContainer: {
    flex: 1
  },

  camera: {
    flex: 1
  },

  cameraButtonContainer: {
    padding: 20
  },

  bottomSpace: {
    height: 30
  }

})