import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [visits, setVisits] = useState([{ id: '1', customerName: 'Ahmet Yılmaz', visitDate: '2026-08-10' }]);
  const [newCustomer, setNewCustomer] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (newCustomer.trim()) {
      if (editingId) {
        setVisits(visits.map(v => v.id === editingId ? { ...v, customerName: newCustomer } : v));
        setEditingId(null);
      } else {
        setVisits([...visits, { id: Date.now().toString(), customerName: newCustomer, visitDate: new Date().toISOString().split('T')[0] }]);
      }
      setNewCustomer('');
    }
  };

  const handleEdit = (item) => {
    setNewCustomer(item.customerName);
    setEditingId(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{editingId ? 'Ziyareti Düzenle' : 'Yeni Ziyaret Oluştur'}</Text>
      <TextInput placeholder="Müşteri Adı" value={newCustomer} onChangeText={setNewCustomer} style={styles.input} />
      <Button title={editingId ? 'Güncelle' : 'Kaydet'} onPress={handleSave} />

      <Text style={styles.header}>Ziyaret Listesi</Text>
      <FlatList
        data={visits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Müşteri: {item.customerName}</Text>
            <Text>Tarih: {item.visitDate}</Text>
            <Button title="Düzenle" onPress={() => handleEdit(item)} />
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
