import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataStore, Predicates } from 'aws-amplify';

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
        // alert(`${JSON.stringify(a)}`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onDeleteAll = () => {
    DataStore.delete(Post, Predicates.ALL);
  };

  return (
    <div className="p-5 space-y-5">
      <div className="flex space-x-3">
        <input
          className="bg-blue-500 text-white rounded px-5 cursor-pointer"
          type="button"
          value="Create"
          onClick={onCreate}
        />

        <input
          className="bg-red-500 text-white rounded px-5 cursor-pointer"
          type="button"
          value="Delete All"
          onClick={onDeleteAll}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {posts.map((post, index) => {
          return (
            <div key={index} className="bg-gray-800 p-3">
              <p>{post.id}</p>
              <p>{post.content}</p>
              <p>{moment(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
