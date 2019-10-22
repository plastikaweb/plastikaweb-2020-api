import { Document } from 'mongoose';

export interface Technology extends Document {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly imageUrl: string;
}
