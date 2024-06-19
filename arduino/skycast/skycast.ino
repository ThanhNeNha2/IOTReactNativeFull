#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
// #include <FirebaseArduino.h>
#include "DHT.h"
#define DHTTYPE DHT11
#define DHTPIN D5  //d5
DHT dht(DHTPIN, DHTTYPE);

#define FIREBASE_HOST "skycastt-556fc-default-rtdb.firebaseio.com"  //Đổi lại nhé
#define FIREBASE_AUTH "AIzaSyAvMjwtUA5pQSNHtqI1yvkypm4aszUlVz4"
#define WIFI_SSID "LAU 3_2"
#define WIFI_PASSWORD "0914083177"

FirebaseData firebaseData;
String path = "/";
 
String fireStatus = "";
                                                      // led status received from firebase
int led = 5;  
void setup() {
  Serial.begin(115200);
  delay(1000);
  pinMode(led, OUTPUT); 
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

  Firebase.getString(firebaseData, "LED_STATUS");
  fireStatus = firebaseData.stringData();
  
  Serial.println(fireStatus);
  if (fireStatus == "ON") 
  {                                                          // compare the input of led status received from firebase
    Serial.println("Led Turned ON");                                                        
    digitalWrite(led, HIGH);                                                         // make external led ON
  } 
  else if (fireStatus == "OFF") 
  {                                                  // compare the input of led status received from firebase
    Serial.println("Led Turned OFF");
    digitalWrite(led, LOW);                                                         // make external led OFF
  }
  else 
  {
    Serial.println("Command Error! Please send ON/OFF");
  }
}