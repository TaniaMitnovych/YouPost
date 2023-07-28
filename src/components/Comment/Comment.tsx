import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IComment } from "../../types/Comment";

export const Comment: React.FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <Card key={comment.id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {
            comment.name
          }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {
            `Author: ${comment.email}`
          }
        </Typography>
        <Typography variant="body2">
          {
            comment.body
          }
        </Typography>
      </CardContent>
    </Card>
  )
}