import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';

import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
  // useSelector is a hook to access the redux store
  const { posts, isLoading } = useSelector((state) => state.posts)
  const classes = useStyles();

  if(!posts.length && !isLoading) return 'No Posts';
  return (
    // if there no no posts/there are posts then do the following
   isLoading ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {
      posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      )) 
      }
    </Grid>
   )
  )
}

export default Posts