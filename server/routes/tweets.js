import express from "express";
import { verifyToken } from "../verifyTokens.js";
import { createTweet, deleteTweet, likeOrDislike, getAllTweets, getUserTweets, getExploreTweets } from "../controller/tweet.js";

const router = express.Router();


//Create Tweet
router.post('/', verifyToken, createTweet);

//Delete Tweet
router.delete('/:id', verifyToken, deleteTweet)

//Like Dislike
router.put('/:id/like', likeOrDislike);

router.put('/:id/dislike', likeOrDislike);

//get all tweets
router.get("/timeline/:id", getAllTweets)

//get user tweet only
router.get("/user/all/:id", getUserTweets)

//explore tweets
router.get('/explore', getExploreTweets)



export default router;