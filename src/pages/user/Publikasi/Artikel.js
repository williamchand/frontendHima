import React from "react";
import PublikasiArtikel from "../../../components/user/ELibraryPage/PublikasiArtikel";
import Layout from "../../../components/user/Layout/Layout";
import Meta from "../../../utils/Meta";

const Artikel = () => {
  return (
    <>
      <Meta title="Hima Persis - Artikel" desc="Hima Persis - Berita" />
      <Layout>
        <PublikasiArtikel />
      </Layout>
    </>
  );
};

export default Artikel;
