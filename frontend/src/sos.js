import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function sendSOS() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      await addDoc(collection(db, "sos_alerts"), {
        userId: "user1",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        status: "active",
        time: new Date()
      });

      alert("SOS SENT 🚨");
    } catch (error) {
      console.error(error);
    }
  });
}