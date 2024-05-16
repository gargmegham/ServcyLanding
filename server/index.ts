import type { Nitro } from "nitropack"
import mongoose from "mongoose"

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig()
    try {
        await mongoose.connect(config.mongodbUri)
    } catch (err) {
        console.error("Failed to connect to MongoDB: ", err)
    }
}
