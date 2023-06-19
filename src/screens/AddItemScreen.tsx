import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useAtom } from "jotai";

import Button from "../components/Button";
import TextField from "../components/Form/TextField";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { icons } from "../theme/icons";
import { fonts } from "../theme/fonts";
import { newItemAtom, addInventoryItem } from "../store/inventory";
import { ImagePicker } from "../sdk/ImagePicker";
import DeleteButton from "../components/DeleteButton";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [newItem, setNewItem] = useAtom(newItemAtom);
  const [{ canAdd, isLimitReached }, setNewItemInInventory] =
    useAtom(addInventoryItem);

  const onTakePhoto = async () => {
    const result = await ImagePicker.takePhoto();
    setNewItem({ ...newItem, photo: result?.assets?.[0].uri || undefined });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title="Add"
          disabled={!canAdd}
          onPress={() => {
            setNewItemInInventory();
            navigation.navigate("Inventory");
          }}
        />
      </View>
      {newItem.photo ? (
        <View>
          <Image
            style={styles.photoContainer}
            source={{ uri: newItem.photo }}
          />
          <DeleteButton
            style={styles.delete}
            onPress={() => setNewItem({ ...newItem, photo: undefined })}
          />
        </View>
      ) : (
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            styles.photoContainer,
          ]}
          onPress={onTakePhoto}
        >
          <Image source={icons.photo} />
          <Text style={styles.add}>Add Photo</Text>
        </Pressable>
      )}

      <View style={styles.form}>
        <TextField
          title="Name"
          placeholder="Bracelet"
          value={newItem.name}
          onChange={(name) => setNewItem((form) => ({ ...form, name }))}
        />
        <TextField
          title="Value"
          placeholder="700"
          type="number-pad"
          rightElement="€"
          error={isLimitReached}
          errorMessage="The total value cannot exceed 40,000 euros"
          value={
            typeof newItem.purchasePrice === "number" &&
            !isNaN(newItem.purchasePrice)
              ? newItem.purchasePrice.toString()
              : ""
          }
          onChange={(purchasePrice) =>
            setNewItem((form) => ({
              ...form,
              purchasePrice: !isNaN(parseInt(purchasePrice, 10))
                ? parseInt(purchasePrice, 10) ?? form.purchasePrice
                : undefined,
            }))
          }
        />
        <TextField
          title="Description"
          placeholder="Optional"
          multiline
          value={newItem.description}
          onChange={(description) =>
            setNewItem((form) => ({ ...form, description }))
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  photoContainer: {
    width: 150,
    height: 150,
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 37,
    paddingHorizontal: 11,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 200,
    borderColor: colors.gray100,
  },
  delete: { position: "absolute", right: 0, bottom: 0 },
  add: {
    fontFamily: fonts.regular,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 24,
    marginTop: 14,
    color: colors.black,
  },
  form: {
    width: "100%",
  },
});
