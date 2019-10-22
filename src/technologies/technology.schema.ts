import * as mongoose from 'mongoose';

export const TechnologySchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  imageUrl: String,
});
