import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const CONTACTS = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    name: "Larson Ashbee",
    phone: "+1 (972) 566-2684",
  },
  {
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    name: "Rosie Arterton",
    phone: "+1 (845) 456-2237",
  },
  {
    img: "",
    name: "Lorraine Abbott",
    phone: "+1 (959) 422-3635",
  },
  {
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    name: "Knapp Berry",
    phone: "+1 (951) 472-2967",
  },
  {
    img: "",
    name: "Bell Burgess",
    phone: "+1 (887) 478-2693",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    name: "Shelby Ballard",
    phone: "+1 (824) 467-3579",
  },
  {
    img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    name: "Bernard Baker",
    phone: "+1 (862) 581-3022",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    name: "Elma Chapman",
    phone: "+1 (913) 497-2020",
  },
];

export default function Example() {
  const sections = React.useMemo(() => {
    const sectionsMap = CONTACTS.reduce((acc, item) => {
      const [lastName] = item.name.split(" ").reverse();

      return Object.assign(acc, {
        [lastName[0]]: [...(acc[lastName[0]] || []), item],
      });
    }, {});

    return Object.entries(sectionsMap)
      .map(([letter, items]) => ({
        letter,
        items,
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contacts</Text>
        </View>

        {sections.map(({ letter, items }) => (
          <View style={styles.section} key={letter}>
            <Text style={styles.sectionTitle}>{letter}</Text>
            <View style={styles.sectionItems}>
              {items.map(({ img, name, phone }, index) => {
                return (
                  <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}
                    >
                      <View style={styles.card}>
                        {img ? (
                          <Image
                            alt=""
                            resizeMode="cover"
                            source={{ uri: img }}
                            style={styles.cardImg}
                          />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                          </View>
                        )}

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>

                          <Text style={styles.cardPhone}>{phone}</Text>
                        </View>

                        <View style={styles.cardAction}>
                          <FeatherIcon
                            color="#9ca3af"
                            name="chevron-right"
                            size={22}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** Section */
  section: {
    marginTop: 12,
    paddingLeft: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  sectionItems: {
    marginTop: 8,
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: "#d6d6d6",
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9ca1ac",
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
  },
  cardBody: {
    marginRight: "auto",
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    color: "#616d79",
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
