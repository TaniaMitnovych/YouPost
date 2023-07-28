import { IPost } from "../types/Post";
import getPost from "./getPost";
import getRandomInt from "./getRandomInt";

async function getRandomPosts(url: string, number: number) {
  const posts = new Array<IPost>;
  for (let i = 0; i <= number - 1; i++) {
    const postID = getUniquePostID(posts);
    const post = await getPost(url, postID);
    posts.push(post.data);
  }
  return posts;
}

const getUniquePostID = (posts: Array<IPost>): number => {
  const minID = 1, maxID = 100;
  let postID = 0;

  do {
    postID = getRandomInt(minID, maxID);
  } while (posts.some(post => post.id === postID))

  return postID;
}

export default getRandomPosts;