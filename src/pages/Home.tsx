import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataStore, Predicates } from 'aws-amplify';
import { Flex, Card, Text, Image, Button } from '@aws-amplify/ui-react';

import moment from 'moment';

import { Post } from '../models';

import { NavBar } from '../ui-sample-components/NavBar';

export const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = () => {
    DataStore.query(Post).then((value) => setPosts(value));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Post).subscribe((msg) => {
      fetchPosts();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onCreate = () => {
    DataStore.save(
      new Post({
        content: `New title ${Date.now()}`,
        media: 'https://picsum.photos/200/300',
      }),
    )
      .then((a) => {
        alert(`${JSON.stringify(a)}`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onDeleteAll = () => {
    DataStore.delete(Post, Predicates.ALL);
  };

  return (
    <>
      <NavBar />

      <Card margin={20}>
        <Flex>
          <Button onClick={onCreate}>Create</Button>
          <Button onClick={onDeleteAll}>Delete All</Button>
        </Flex>
      </Card>

      <Flex margin={20} wrap="wrap">
        {posts.map((post, index) => {
          return (
            <Card key={index} width="22%">
              <Text>{post.id}</Text>
              <Image src={post.media} alt="image" />
              <Text>{post.content}</Text>
              <Text>
                {moment(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};
