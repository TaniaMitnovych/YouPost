import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import getUserList from "../../helpers/getUserList";
import { Header } from "../../components/Header/Header";
import MenuItem from '@mui/material/MenuItem';
import { IUser } from "../../types/User";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import getRandomPosts from "../../helpers/getRandomPosts";
import PostList from "../../components/PostList/PostList";
import { IPost } from "../../types/Post";
import getUsersPosts from "../../helpers/getUsersPosts";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import "./MainPage.scss";

export const MainPage: React.FC<{}> = ({ }) => {
  const [userID, setUserID] = React.useState<number>(0);
  const [users, setUsers] = React.useState<Array<IUser>>([]);
  const [posts, setPosts] = React.useState<Array<IPost>>([]);
  const dataURL = "https://jsonplaceholder.typicode.com";

  React.useEffect(() => {
    getUserList(dataURL)
      .then(response => {
        setUsers(response.data);
      });
    getRandomPosts(dataURL, 10)
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  React.useEffect(() => {
    if (userID === 0) {
      getRandomPosts(dataURL, 10)
        .then(posts => {
          setPosts(posts);
        });
    } else {
      getUsersPosts(dataURL, userID)
        .then(response => {
          setPosts(response.data);
        })
    }
  }, [userID])

  const handleUserSelect = (event: SelectChangeEvent<number>) => {
    const userId = Number(event.target.value);
    setUserID(userId);
  }

  const handleClearSelect = () => {
    setUserID(0);
  }
  return (
    <main className="main-page">
      <Header headerText='YouPost' hasHistory={false} />
      <div className="main-page__content">
        <div className="main-page__user-picker">
          <FormControl>
            <InputLabel id="main-page__user-picker-label">
              User
            </InputLabel>
            <Select
              id="main-page__user-picker"
              labelId="main-page__user-picker-label"
              value={userID}
              label="User"
              onChange={handleUserSelect}
            >
              {
                users.map((user: IUser) => {
                  return (
                    <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleClearSelect}>Clear select</Button>
        </div>
        {
          posts.length ?
            <PostList posts={posts} />
            : <CircularProgress />
        }
      </div>
    </main>
  )
}