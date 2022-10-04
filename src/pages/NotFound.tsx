import { useContext, useEffect, useState, useRef } from 'react';

import { Header } from '../components/layouts/Header';
import { Footer } from '../components/layouts/Footer';

export const NotFound = () => {
  return (
    <section className="my-layout-without-nav">
      <header>
        <Header />
      </header>
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
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>404 | Not Found</h1>
    </div>
  );
};
