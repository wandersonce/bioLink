import User from '../../../utils/user';
import dbConnect from '../../../lib/dbConnect';
import handler from '../../../utils/handler';

handler.post(createUser);

async function createUser(req, res) {
  const data = req.body;

  const { name, email, password, imgUrl } = data;

  dbConnect();

  const user = await User.create(req.body);

  res.status(201).json({ message: 'Created user!' });
}

export default handler;
