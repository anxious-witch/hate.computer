import { Document, Schema, Types } from 'mongoose';

interface Paste {
  readonly id: Types.ObjectId;
  title: string;
  language: string;
  body: string;
  encrypted: boolean;
  passphrase?: string;
  readonly createdAt?: Date;
}
