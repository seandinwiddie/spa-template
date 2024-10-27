import React from 'react';
import Layout from './_layout';
import Welcome from '../components/Welcome';

const App: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default App;
