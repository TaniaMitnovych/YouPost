import React from "react";
import { Header } from "../../components/Header/Header";
import { useParams } from 'react-router-dom';
import { IComment } from "../../types/Comment";
import getComments from "../../helpers/getComments";
import CommentList from "../../components/CommentList/CommentList";
import CircularProgress from '@mui/material/CircularProgress';
import "./CommentsPage.scss";

export const CommentsPage: React.FC<{}> = ({ }) => {
  const { id } = useParams<{ id: string }>();

  const [comments, setComments] = React.useState<Array<IComment>>([]);

  const dataURL = "https://jsonplaceholder.typicode.com";

  React.useEffect(() => {
    getComments(dataURL, Number(id))
      .then(response => {
        setComments(response.data);
      })
  }, []);

  return (
    <main className="comments-page">
      <Header headerText={`Comments for post #${id}`} hasHistory={true} />
      <div className="comments-page__content">
        {
          comments.length ?
            <CommentList comments={comments} />
            : <CircularProgress />
        }
      </div>
    </main>
  )
}