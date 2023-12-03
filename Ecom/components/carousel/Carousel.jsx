import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");
const carouselItem = require("./carousel.json");
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export function Carousel() {
  let flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  // Function to automatically slide the carousel
  const autoSlide = () => {
    const nextIndex = (currentIndex + 1) % carouselItem.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]); // Re-run when currentIndex changes

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
