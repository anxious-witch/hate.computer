import mongoose, { Document, Model, Schema, model } from 'mongoose';
import { LabeledLanguage } from '~/util/syntax';

export interface Paste {
  title: string;
  language: LabeledLanguage;
  body: string;
  encrypted: boolean;
  passphrase?: string;
}

interface PasteDocument extends Paste, Document {}

type PasteModel = Model<PasteDocument>;

const PasteSchema = new Schema<PasteDocument, PasteModel>(
  {
    title: {
      type: String,
      required: true,
    },
    language: {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
    body: {
      type: String,
      required: true,
    },
    encrypted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Paste ||
  model<PasteDocument, PasteModel>('Paste', PasteSchema);
