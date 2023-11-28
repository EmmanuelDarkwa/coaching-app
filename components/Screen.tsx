import { Platform, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
 style?:StyleProp<ViewStyle>;
 children:ReactNode;
}

const Screen:React.FC<Props> = ({style,children}) => {
  return (
    <SafeAreaView style={[
        {
        paddingTop:Platform.OS === "android" ? 30 : 0,
    }, style
    ]}>
        {children}
    </SafeAreaView>
  )
}

export default Screen