import Head from "next/head";


const HeadInfo = ({title, keyword, contents}: any) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name={keyword}/>
                <meta content={contents}/>
            </Head>
        </div>
    );
};

HeadInfo.defalutProps={
    title: 'My Blog',
    keyword: "Blog powered by Next ts",
    contents: "practice js"
}

export default HeadInfo;
