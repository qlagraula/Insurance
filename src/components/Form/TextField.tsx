import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions } from "react-native";
import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import { ReactNode } from "react";

export default function TextField(props: {
  title: string;
  placeholder: string;
  type?: KeyboardTypeOptions;
  multiline?: boolean;
  rightElement?: ReactNode;
}) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{
            ...styles.input,     
            minHeight: props.multiline ? 128 : undefined,        
          }}>
        <TextInput 
          keyboardType={props.type} 
          style={{
            ...styles.field,     
            minHeight: props.multiline ? 128 : undefined,        
          }}
          placeholder={props.placeholder} 
          multiline={props.multiline}
        />
        {props.rightElement ? 
          <View style={styles.rightElement}>{
            typeof props.rightElement === 'string' ? 
              <Text style={styles.rightText}>{props.rightElement}</Text>
              : props.rightElement
            }</View>
          : null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.regular,
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 17,
    color: colors.gray1000
  },
  input: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    marginTop: 5,
    fontSize: 17,
    lineHeight: 24,
    colors: colors.mainGrey
  },
  field: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: colors.gray100,
    borderWidth: 2,
    backgroundColor: colors.white,
  },
  rightElement: {
    position: "absolute",
    right: 0,
  },
  rightText: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24,
    borderWidth: 2,
    borderColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: colors.gray700
  },
});
