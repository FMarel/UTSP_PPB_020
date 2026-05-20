import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from './screens/DashboardScreen'
import TambahLaporanScreen from './screens/TambahLaporanScreen'
import ListBarangScreen from './screens/ListBarangScreen'
import DetailBarangScreen from './screens/DetailBarangScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Stack.Screen
          name="Tambah Laporan"
          component={TambahLaporanScreen}
        />

        <Stack.Screen
          name="List Barang"
          component={ListBarangScreen}
        />

        <Stack.Screen
          name="Detail Barang"
          component={DetailBarangScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}