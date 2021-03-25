import db from './db';

export default (req, res) => {
  res.status(200).send(db);
}
