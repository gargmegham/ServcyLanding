import { Schema, model } from "mongoose"

const companySchema = new Schema({
    tagline: String,
    rating: String,
    reviews_count: String,
    min_project_size: String,
    name: String,
    website: String,
    hourly_rate: String,
    location: String,
    team_size: String,
    linkedin: String,
    executives: [
        {
            name: String,
            position: String,
            linkedin: String,
            image: String,
            email: String
        }
    ],
    logo: String
})

export const Company = model("companies", companySchema)

export default defineEventHandler(async (event) => {
    const companies = await Company.find()
    return companies
})
