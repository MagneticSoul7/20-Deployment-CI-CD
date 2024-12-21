import {Question} from '../models/index.js';

export default async () => {
  try {
    await Question.deleteMany(
    )
    console.log("database cleared")
  } catch (err) {
    throw err;
  }
}
