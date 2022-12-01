import { React } from "react";
import { ScrollView, View, Text, Image } from "react-native";

export default function Start() {
  return(
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image source={require("../../assets/icons/logo3.png")} />
                <Text>
                    Lorem ipsum dolor sit amet {"/n"} consectetur adipiscing elit.
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}