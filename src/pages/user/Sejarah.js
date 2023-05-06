import React from "react";
import SejarahOrganisasi from "../../components/user/HomePage/SejarahOrganisasi/SejarahOrganisasi";
import Layout from "../../components/user/Layout/Layout";

const Sejarah = () => {
    return (
        <>
            <Layout>
                <div className="p-6">
                    <SejarahOrganisasi />
                </div>
            </Layout>
        </>
    )
};

export default Sejarah;
