import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home( {posts} : {posts : Type[]} ) {
    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <ul>
                {posts.map( (post : any) => {
                    return (<li key={post.id}> {post.title}</li>)
                })}
            </ul>
        </div>
    )
}


// export const getServerSideProps = async ()=>{
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
//     const posts = await res.data;
//     return {
//         props:{
//             posts
//         }
//     }
// }

export const getStaticProps = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
    const posts = await res.data;
    return {
        props:{
            posts
        },
        revalidate: 20
    }
}

interface Type {
    body :string;
    id :number;
    title :string;
    userId :number;
}
