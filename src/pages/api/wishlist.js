import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('wishListItems');
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body;
      let myPost = await db.collection('wishList').insertOne(bodyObject);
      res.json(myPost);
      break;
    case 'GET':
      const allPosts = await db.collection('wishList').find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
    case 'DELETE':
      let itemId = req.body;
      let verifiedId = new ObjectId(itemId);

      try {
        const deleteItem = await db
          .collection('wishList')
          .findOneAndDelete({ _id: verifiedId });

        res.status(200).json(deleteItem);
      } catch (err) {
        console.log(err);
      }

      break;
  }
}
