import { TouchableOpacity, Text} from 'react-native'

export default function CustomButton({ title,
  onPress,
  disabled
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor:
          disabled
            ? 'gray'
            : '#2563eb',

        padding: 15,
        borderRadius: 10,
        marginVertical: 10
      }}
    >

      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>

    </TouchableOpacity>
  )
}