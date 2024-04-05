import { FlatList, View } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import { Stack, Tabs } from 'expo-router';

export default function MenuScreen() {
  return (

    <View>
      <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} numColumns={2} />
    </View>
  );
}

