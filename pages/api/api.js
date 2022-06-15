import {dbInstance } from '../../config/fire-config'
import {addDoc } from 'firebase/firestore';

export const saveToDatabase = (namaBangun, hasil) => {
  const data = {
    "dataCreated": Date.now(),
    "name": localStorage.getItem("name"),
    "school": localStorage.getItem("school"),
    "age": localStorage.getItem("age"),
    "address": localStorage.getItem("address"),
    "phone": localStorage.getItem("phone"),
    "bangun": namaBangun,
    "hasil": hasil
  }
  addDoc(dbInstance, {
    data
  })
}