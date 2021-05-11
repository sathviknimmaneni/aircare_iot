import React from "react";
import { View, Text, Modal, Pressable, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ModalComponent = ({ modal, setModal }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModal(!modal)}
              style={{ alignSelf: "flex-end" }}
            >
              <AntDesign name="closecircleo" size={24} color="black" />
            </Pressable>
            <Image
              source={require("../assets/aqidetails.jpeg")}
              style={styles.image}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "stretch",
  },
});

export default ModalComponent;
