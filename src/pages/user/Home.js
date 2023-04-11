import React from "react";
import HomePage from "../../components/user/HomePage/HomePage";
import Layout from "../../components/user/Layout/Layout";
import Meta from "../../utils/Meta";
import icon from '../../images/hima-persis.jpg';

const Home = () => {
  return (
    <>
      <Meta title="Hima Persis" desc="Hima Persis" imageUrl={icon} />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
