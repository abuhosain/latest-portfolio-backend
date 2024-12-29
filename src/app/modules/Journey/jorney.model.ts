import { model, Schema, Types } from 'mongoose'
import { IJourney } from './journey.interface'

// Define the Mongoose schema for a journey entry
const journeySchema = new Schema<IJourney>(
  {
    type: {
      type: String,
      enum: ['experience', 'education', 'skill'],
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: function () {
        return this.type === 'experience'
      },
    },
    institution: {
      type: String,
      required: function () {
        return this.type === 'education'
      },
    },
    icon: {
      type: String,
      required: function () {
        return this.type === 'skill'
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// Export the journey model
export const Journey = model<IJourney>('Journey', journeySchema)
