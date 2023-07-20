import { app } from "../service/firebase.config.js"
import { getFirestore, collection, query, where, doc, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

const firestoreDB = getFirestore(app)

export const getData = (database, key, value) => {
	return new Promise((resolve) => {
		database === undefined && resolve("Database parameter missing")

		const condition = key === undefined || value === undefined ? undefined : where(key, "==", value)
		const collectionRef = collection(firestoreDB, database)
		const ref = query(collectionRef, condition)

		getDocs(ref).then((snapshot) => {
			const docsData = snapshot.docs.map((doc) => {
				return { ...doc.data(), uid: doc.id }
			})

			resolve(docsData)
		})
	})
}

export const deleteData = async (database, dataToDelete) => {
	try {
		await deleteDoc(doc(firestoreDB, database, dataToDelete))
		return true
	} catch (error) {
		return false
	}
}

export const addToDatabase = async (database, dataToWrite) => {
	const ordersCollection = collection(firestoreDB, database)

	try {
		await addDoc(ordersCollection, dataToWrite)
		return true
	} catch (error) {
		return false
	}
}

export const updateData = async (database, uid, dataToUpdate) => {
	const docRef = await updateDoc(doc(firestoreDB, database, uid), dataToUpdate)
	return docRef 
}