import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="#ffb6c1"
      category="mkt"
      date="19 de Agosto de 2020"
      timeToRead="2"
      title="O fim das vendedoras"
      description="Se a sua reação ao ler o tema desse post foi igual a da Rachel, calma! Vou te explicar direitinho."
    />
  </Layout>
);

export default IndexPage;
