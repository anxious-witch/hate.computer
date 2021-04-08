import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '~/util/database';
import PasteModel from '~/schemas/Paste';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(422).json({
      message: 'Unsupported method',
    });
  }

  await connectToDatabase();
  const paste = new PasteModel(req.body);

  return paste.save().then(
    () => {
      return res.status(201).json(paste);
    },
    err => {
      return res.status(422).json(err);
    }
  );
};

export default handler;
