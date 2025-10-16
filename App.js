import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚚 نظام محاسبي لوكالات الشحن</Text>
      <Text style={styles.subtitle}>برمجة وتطوير جتيم ناصر أبو أسيل</Text>
      <Text style={styles.subtitle}>📞 +967778277553 | 📱 واتساب: +967777798213</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center'
  }
});
