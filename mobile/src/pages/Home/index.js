import React, { Component } from "react";
import { StatusBar, Text, ScrollView } from "react-native";

import ButtonComponent from "../../components/Button";
import AquarioListComponent from "../../components/AquarioList";

import { Container, View } from "./styles";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

export default class Home extends Component {
  static navigationOptions = {
    title: "Aquarius",
    headerStyle: {
      backgroundColor: "#0099ff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <ScrollView>
          <View>
            <AquarioListComponent />
            <Text style={{ textAlign: "center" }}>
              Você ainda não tem nenhum aquario.
            </Text>
            <ButtonComponent title="Adicionar Aquario" />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
