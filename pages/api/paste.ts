import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '~/util/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  res.status(200).json({
    message: 'hello',
  });
};

export default handler;
