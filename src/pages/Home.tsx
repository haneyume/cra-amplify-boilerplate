import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataStore, Predicates } from 'aws-amplify';
import { Flex, Card, Text, Image, Button } from '@aws-amplify/ui-react';

import moment from 'moment';

import { Post } from '../models';

import { Header } from '../components/layouts/Header';
import { Footer } from '../components/layouts/Footer';
import { Sidebar } from '../components/layouts/Sidebar';

export const Home = () => {
  return (
    <section className="my-layout">
      <header>
        <Header />
      </header>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

const Content = () => {
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
