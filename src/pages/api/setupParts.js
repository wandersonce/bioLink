import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('wishListItems');
  switch (req.method) {
    case 'POST':
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection('setupParts').insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case 'GET':
      const allPosts = await db.collection('setupParts').find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
    case 'DELETE':
      let itemId = req.body;
      let verifiedId = new ObjectId(itemId);

      try {
        const deleteItem = await db
          .collection('setupParts')
          .findOneAndDelete({ _id: verifiedId });
        res.status(200).json(deleteItem);
      } catch (err) {
        console.log(err);
      }

      break;

    case 'PUT':
      let changedItem = req.body;
      let verifiedChangeId = new ObjectId(changedItem._id);

      try {
        const updatedItem = await db.collection('setupParts').findOneAndUpdate(
          { _id: verifiedChangeId },
          {
            $set: {
              name: changedItem.name,
              productLink: changedItem.link,
              imgLink: changedItem.imgLink,
            },
          }
        );

        res.status(200).json(updatedItem);
      } catch (err) {
        console.log(err);
      }

      break;
  }
}
