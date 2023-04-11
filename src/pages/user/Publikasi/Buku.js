import React from "react";
import PublikasiBuku from "../../../components/user/ELibraryPage/PublikasiBuku";
import Layout from "../../../components/user/Layout/Layout";
import Meta from "../../../utils/Meta";

const Buku = () => {
  return (
    <>
      <Meta title="Hima Persis - Buku" desc="Buku" />
      <Layout>
        <PublikasiBuku />
      </Layout>
    </>
  );
};

export default Buku;
