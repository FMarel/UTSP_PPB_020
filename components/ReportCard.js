import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

export default function ReportCard({
  item,
  onPress
}) {

  const isHilang =
    item.status?.toLowerCase() === 'hilang'

  return (

    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        elevation: 3
      }}
    >

      {
        item.image_url &&
        <Image
          source={{ uri: item.image_url }}
          style={{
            width: '100%',
            height: 180,
            borderRadius: 12,
            marginBottom: 15
          }}
        />
      }

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10
        }}
      >

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#111',
            flex: 1
          }}
        >
          {item.nama_item}
        </Text>

        {/* Status Badge */}
        <View
          style={{
            backgroundColor:
              isHilang
                ? '#ffd6d6'
                : '#d7ffd9',

            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 20
          }}
        >

          <Text
            style={{
              color:
                isHilang
                  ? 'red'
                  : 'green',

              fontWeight: 'bold'
            }}
          >
            {item.status}
          </Text>

        </View>

      </View>

      {/* Detail */}
      <Text
        style={{
          color: '#666',
          marginBottom: 5
        }}
      >
        Kategori: {item.kategori}
      </Text>

      <Text
        style={{
          color: '#666'
        }}
      >
        Lokasi: {item.lokasi}
      </Text>

    </TouchableOpacity>
  )
}