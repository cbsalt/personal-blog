import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import notFound from '../../static/assets/img/404.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="404: Not found" />
    <h1>Ops... 404 error</h1>
    <img src={notFound} alt="not-found" />
  </Layout>
);

export default NotFoundPage;
