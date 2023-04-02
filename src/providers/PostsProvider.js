import { createContext } from 'react';
import { useProvidePosts } from '../hooks';

const InitialState = {
  posts: [],
  loading: true,
  addPostToState: () => {},
  addComment: () => {},
};

export const PostsContext = createContext(InitialState);

export const PostsProvider = ({ children }) => {
  const posts = useProvidePosts();
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};
