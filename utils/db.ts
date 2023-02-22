

import mongoose from "mongoose";
import * as process from 'process';

interface Connection {
	isConnected?: number;
}

const connection: Connection = {};

export async function connectDB(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already connected");
		return;
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState;
		if (connection.isConnected === 1) {
			console.log("Use previous connection");
			return;
		}
		await mongoose.disconnect();
	}
	mongoose.set("strictQuery", false);
	const db = await mongoose.connect(process.env.MONGO_URL!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as Parameters<typeof mongoose.connect>[1]);
	console.log("New connection");
	connection.isConnected = mongoose.connections[0].readyState;
}


export async function disconnectDB(): Promise<void> {
	if (connection.isConnected){
	if (process.env.NODE_ENV === 'production'){
		await mongoose.disconnect()
		connection.isConnected=0
	}else {
		console.log("Not connected from the database");
	}
	}
}