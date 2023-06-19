import { StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import TextField from "../components/Form/TextField";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { icons } from "../theme/icons";
import { fonts } from "../theme/fonts";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <View style={styles.titleContainer}>
        <Image
          source={icons.photo}
        />
        <Text style={styles.title}>Add Photo</Text>
      </View>
      <View style={styles.form}>
        <TextField title="Name" placeholder="Bracelet"/>
        <TextField title="Value" placeholder="700" type="numeric" rightElement="€" />
        <TextField title="Description" placeholder="Optional" multiline />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  titleContainer: {
    width: 150,
    height: 150,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 37,
    paddingHorizontal: 11,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 200,
    borderColor: colors.gray100,
  },
  title: {
    fontFamily: fonts.regular,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 24,
    marginTop: 14,
    color: colors.black
  },
  form: {
    width: '100%'
  }
});
