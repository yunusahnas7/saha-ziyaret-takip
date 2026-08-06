import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [visits, setVisits] = useState([{ id: '1', customerName: 'Ahmet Yılmaz', visitDate: '2026-08-10' }]);
  const [newCustomer, setNewCustomer] = useState('');

  // Ekran 2: Yeni Ziyaret Oluşturma - Kaydet butonu[span_1](start_span)[span_1](end_span)
  const handleSave = () => {
    if(newCustomer) {
      setVisits([...visits, { id: Date.now().toString(), customerName: newCustomer, visitDate: new Date().toISOString().split('T')[0] }]);
      setNewCustomer('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Ziyaret Oluştur</Text>
      <TextInput placeholder="Müşteri Adı" value={newCustomer} onChangeText={setNewCustomer} style={styles.input} />
      <Button title="Kaydet" onPress={handleSave} />

      <Text style={styles.header}>Ziyaret Listesi</Text>
      <FlatList
        data={visits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Ekran 1: Müşteri Adı ve Ziyaret Tarihi[span_2](start_span)[span_2](end_span) */}
            <Text>Müşteri: {item.customerName}</Text>
            <Text>Tarih: {item.visitDate}</Text>
            {/* Ekran 3: Mevcut ziyareti düzenleme[span_3](start_span)[span_3](end_span) */}
            <Button title="Düzenle" onPress={() => console.log('Düzenle tıklandı')} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  header: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 10 }
});
