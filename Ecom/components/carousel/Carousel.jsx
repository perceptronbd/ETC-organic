import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");
const carouselItem = require("./carousel.json");
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export function Carousel() {
  let flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }) => {
    console.log("changed", changed);
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("clicked")}
        activeOpacity={1}
      >
        <Image
          source={{ uri: item.url }}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselItem}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotView}>
        {carouselItem.map((_, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={{
                width: currentIndex === index ? 8 : 5,
                height: currentIndex === index ? 8 : 5,
                borderRadius: 50,
                marginHorizontal: 5,
                backgroundColor: currentIndex === index ? "black" : "gray",
              }}
              onPress={() => scrollToIndex(index)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    width,
    marginTop: 5,
  },
  carousel: {
    width,
    maxHeight: 260,
  },
  image: {
    width: width - 20,
    height: 240,
    resizeMode: "cover",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
