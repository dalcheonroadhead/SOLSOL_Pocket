import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import Title from "../Components/Title";
import { FlatListData } from "../test/FlatListData";
import Divider from "../Components/Divider";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const minColumnSize = WIDTH >= 500 ? 200 : 130;
const divisor = WIDTH / minColumnSize;
const numColumns = Math.floor(divisor);
const columnSize = WIDTH / numColumns;

export default ({ navigation }) => {
  const { DATA } = FlatListData();

  const icons = {
    1: require("../img/quest_money.png"),
    2: require("../img/quest_excellent.png"),
    "-1": require("../img/quest_star.png"),
  };

  const renderItem = ({ item: { id, type, name } }) => {
    if (type === -1) {
      return (
        <TouchableOpacity
          key={`index - ${id}`}
          onPress={() => navigation.navigate(`QuestType${type}`)}
          style={styles.renderItemStyle}
        >
          <Image
            source={icons[type]}
            resizeMode="contain"
            style={styles.renderItemImage}
          />
          <Text style={styles.renderItemText}>{name}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={`index - ${id}`}
        onPress={() => navigation.navigate(`QuestType${type}`)}
        style={styles.renderItemStyle}
      >
        <Image
          source={icons[type]}
          resizeMode="contain"
          style={styles.renderItemImage}
        />
        <Text style={styles.renderItemText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* Header 부분 */}
      <Title navigation={navigation} title={"가계부 보기"} />
      <TouchableOpacity
        style={styles.forImageView}
        onPress={() => navigation.navigate("Detail")}
      >
        {/* 회원 카드 부분  */}
        <Image
          source={require("../img/user_gold_card.png")}
          style={styles.forImage}
        />
        <View style={styles.forNameView}>
          <Text style={styles.forText}>김 대 영</Text>
        </View>
        <View style={styles.forMoneyView}>
          <Text style={styles.forMoneyText}>1,017,040 원</Text>
        </View>
        <View style={styles.forTierView}>
          <Text style={styles.forTierText}>GOLD</Text>
        </View>
      </TouchableOpacity>

      <Divider />

      <View
        style={{
          backgroundColor: "#3D70FF",
          height: HEIGHT / 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Divider />
        <Divider />

        <FlatList
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          data={DATA}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forImageView: {
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "center",
  },

  forImage: {
    width: WIDTH / 1.5,
    height: HEIGHT / 4,
  },
  forNameView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 420,
    bottom: 180,
    justifyContent: "center",
    alignItems: "center",
  },

  forMoneyView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 420,
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    paddingLeft: 20,
  },
  forTierView: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 420,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  forText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  forMoneyText: {
    fontSize: 40,
    fontWeight: "bold",
  },

  forTierText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },

  renderItemStyle: {
    marginLeft: 40,
    width: columnSize,
    height: columnSize,
    backgroundColor: "#AAEBFF",
    justifyContent: "center",
    alingItems: "center",
    borderRadius: 60,
  },
  renderItemImage: {
    width: columnSize / 2,
    height: columnSize / 2,
    alignSelf: "center",
  },

  renderItemText: {
    fontSize: 24,
    fontStyle: "italic",
    alignSelf: "center",
  },
});
