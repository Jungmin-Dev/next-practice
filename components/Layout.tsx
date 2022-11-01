import Nav from './Nav'
import Head from "next/head";

const Layout = ({children} :any) => {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="hello"/>
                <meta content="test"/>
            </Head>
            <Nav></Nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;
