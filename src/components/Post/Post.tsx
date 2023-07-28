import React, { MouseEvent } from "react";
import { IPost } from "../../types/Post";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import getUserByID from "../../helpers/getUserByID";
import { IUser } from "../../types/User";
import { useNavigate } from "react-router-dom";

export const Post: React.FC<{ post: IPost }> = ({ post }) => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const navigate = useNavigate();
  const dataURL = "https://jsonplaceholder.typicode.com";

  React.useEffect(() => {
    getUserByID(dataURL, post.userId)
      .then((response) => {
        setUser(response.data);
      })
  }, [])

  const handlePostClick = (event: MouseEvent) => {
    navigate(`/post/${post.id}`)
  }

  return (
    <Card key={post.id} onClick={handlePostClick}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {
            post.title
          }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {
            `Author: ${user && user.username}`
          }
        </Typography>
        <Typography variant="body2">
          {
            post.body
          }
        </Typography>
      </CardContent>
    </Card>
  )
}