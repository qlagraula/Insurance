import { StyleSheet, Pressable, PressableProps, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function DeleteButton(
  props: PressableProps & { style: ViewStyle }
) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        props.style,
        { opacity: pressed ? 0.5 : 1 },
        styles.button,
      ]}
      pressRetentionOffset={10}
    >
      <Ionicons name="trash" size={20} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.terracota500,
    alignItems: "center",
    justifyContent: "center",
  },
});
