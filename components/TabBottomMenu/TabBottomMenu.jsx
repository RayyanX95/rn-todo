import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { s } from "./TabBottomMenu.style";

export function TabBottomMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="list"
            size={24}
            color={selectedTabName === "all" ? "#2F76E5" : "black"}
          />
          <Text style={getTextStyle("all")}>All</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="hourglass-empty"
            size={24}
            color={selectedTabName === "inProgress" ? "#2F76E5" : "black"}
          />
          <Text style={getTextStyle("inProgress")}>In progress</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="check-circle"
            size={24}
            color={selectedTabName === "done" ? "#2F76E5" : "black"}
          />
          <Text style={getTextStyle("done")}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
