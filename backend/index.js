require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

main()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
}

const LikeSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Like = mongoose.model("Like", LikeSchema);

async function initializeLikes() {
  let likeDoc = await Like.findOne({});
  if (!likeDoc) {
    likeDoc = new Like();
    await likeDoc.save();
  }
}
initializeLikes();

app.get("/api/likes", async (req, res) => {
  let likes = 0;
  try {
    let likeDoc = await Like.findOne({});
    const likes = likeDoc.count;
    res.json({ likes });
  } catch (err) {
    res.status(500).send("Error retrieving likes");
  }
});

app.post("/api/like", async (req, res) => {
  try {
    let likeDoc = await Like.findOne({});
    likeDoc.count += 1;
    await likeDoc.save();
    res.json({ likes: likeDoc.count });
  } catch (err) {
    res.status(500).send("Error updating likes");
  }
});

app.post("/api/dislike", async (req, res) => {
  try {
    let likeDoc = await Like.findOne({});
    likeDoc.count -= 1;
    await likeDoc.save();
    res.json({ likes: likeDoc.count });
  } catch (err) {
    res.status(500).send("Error updating likes");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
