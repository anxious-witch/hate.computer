// 6044347d01e8782397da87f6

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '~/util/database';
import { isValidObjectId } from 'mongoose';
import PasteModel from '~/schemas/Paste';
import { decrypt } from '~/util/crypto';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(422).json({
      message: 'Unsupported method',
    });
  }

  const { id } = req.query;
  await connectToDatabase();

  if (!isValidObjectId(id)) {
    return res.status(422).json({
      message: 'Invalid ID >:(',
    });
  }

  const paste = await PasteModel.findById(id);

  if (!paste) {
    return res.status(404).json({
      message: 'No paste by that ID found',
    });
  }

  res.status(200).json(
    paste.toObject({
      versionKey: false,
    })
  );
};

export default handler;
