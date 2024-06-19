#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
// #include <FirebaseArduino.h>
#include "DHT.h"
#define DHTTYPE DHT11
#define DHTPIN D5  //d5
DHT dht(DHTPIN, DHTTYPE);

#define FIREBASE_HOST "skycastt-556fc-default-rtdb.firebaseio.com"  //Đổi lại nhé
#define FIREBASE_AUTH "AIzaSyAvMjwtUA5pQSNHtqI1yvkypm4aszUlVz4"
// #define WIFI_SSID "LAU 3_2"
// #define WIFI_PASSWORD "0914083177"
#define WIFI_SSID "iphone 5"
#define WIFI_PASSWORD "12345789"
FirebaseData firebaseData;
String path = "/";
 
int led1 = 5;
int led2 = 4;
void setup() {
  Serial.begin(115200);
  delay(1000);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);  //kết nối với wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setString(firebaseData, "LED_STATUS", "OFF");
  Firebase.setString(firebaseData, "LED_STATUS2", "OFF");
  dht.begin();
}
void loop() {

  float h = dht.readHumidity();

  float t = dht.readTemperature();  // Đọc nhiệt độ theo độ C

  if (isnan(h) || isnan(t)) {

    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  Serial.print("Nhiet do: ");

  Serial.print(t);

  Serial.print("*C  ");

  Serial.print("Do am: ");

  Serial.print(h);

  Serial.println("%  ");

  Firebase.setInt(firebaseData, path + "/humid", t);
  Firebase.setInt(firebaseData, path + "/temp", h);

  // lED 1
  Firebase.getString(firebaseData, "LED_STATUS");
  String fireStatus1 = firebaseData.stringData();  // Lấy trạng thái của đèn thứ nhất từ Firebase
  Serial.println("Led 1: " + fireStatus1);
  if (fireStatus1 == "ON") {  // So sánh trạng thái của đèn thứ nhất
    Serial.println("Led 1 Turned ON");
    digitalWrite(led1, HIGH);
  } else if (fireStatus1 == "OFF") {
    Serial.println("Led 1 Turned OFF");
    digitalWrite(led1, LOW);
  } else {
    Serial.println("Command Error for Led 1! Please send ON/OFF");
  }

  // LED 2
  Firebase.getString(firebaseData, "LED_STATUS2");
  String fireStatus2 = firebaseData.stringData(); // Lấy trạng thái của đèn thứ hai từ Firebase
  Serial.println("Led 2: " + fireStatus2);
  if (fireStatus2 == "ON") {  // So sánh trạng thái của đèn thứ hai
    Serial.println("Led 2 Turned ON");
    digitalWrite(led2, HIGH);
  } else if (fireStatus2 == "OFF") {
    Serial.println("Led 2 Turned OFF");
    digitalWrite(led2, LOW);
  } else {
    Serial.println("Command Error for Led 2! Please send ON/OFF");
  }
}