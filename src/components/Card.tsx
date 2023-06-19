import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function Card(props: { title: string, subTitle: string, photo: string }) {
  return (
    <View
      style={styles.cardContainer}
    >
      <Image source={{uri:props.photo}} style={styles.photo}/>
      <View style={styles.text}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.subTitle}>
          {props.subTitle}
        </Text>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cardContainer: {
    width: (screenWidth/2) - 20 - 15/2,
    height: 265,
    backgroundColor: colors.white,
    boxShadow: "0px 10px 20px ",
    borderRadius: 14,
    marginTop: 15,
    shadowColor: 'rgba(6, 8, 13)',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  photo: {
    height: 158,
    width: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  text: {
    flex:1 ,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
    color: colors.gray1000,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    color: colors.gray700
  },
});
