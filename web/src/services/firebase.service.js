import { app } from "../services/firebase.config.js"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"

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