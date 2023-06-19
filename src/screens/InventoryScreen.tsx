import { StyleSheet, View, ScrollView } from "react-native";
import { useAtom } from 'jotai'

import { Title } from "../components/Title";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { inventoryAtom } from "../store/inventory";
import Card from "../components/Card";

export default function InventoryScreen({
  navigation,
  route
}: RootTabScreenProps<"Inventory">) {
  const [inventory] = useAtom(inventoryAtom)

  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
    <View style={styles.title}>
        <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
        
    </View>
    <ScrollView contentContainerStyle={styles.scrollView}>
      {inventory.map(item => 
        <Card 
          key={item.id} 
          title={item.name} 
          subTitle={item.purchasePrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR',
            maximumSignificantDigits:1
          })} 
          photo={item.photo}/>)}
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    paddingHorizontal: 20
  },
  scrollView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
