import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import FontSize from '../constants/FontSize'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Spacing from '../constants/Spacing'

interface Props {
title?: string
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: Spacing.margin.lg,
          }}
        >
          <AppText>{title}</AppText>
          <TouchableOpacity>
            <AppText
              style={{
                fontSize: FontSize.sm,
                color: Colors.accent,
              }}
            >
              See All
            </AppText>
          </TouchableOpacity>
        </View>
  )
}

export default SectionHeader