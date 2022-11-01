import {photoType} from "../../photos";
import Link from "next/link"
import axios from "axios";
import {Context} from "react";

const Index = ({photo}: { photo: photoType }) => {
    const {title, url}: { title: string, url: string } = photo;
    return (
        <div>
            <h2>{title}</h2>
            <img
                width={500}
                height={500}
                alt={title}
                src={url}
            />
            <Link href={"/photos"}>
                돌아가기
            </Link>
        </div>
    );
};

export const getStaticProps = async (context :any) => {
    const {id} : {id:string} = context.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.data;
    return {
        props: {
            photo
        }
    }
}

export const getStaticPaths = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10");
    const photos = await res.data;
    const ids = photos.map((photo: photoType) => photo.id);
    const paths = ids.map((id: number) => {
        return {
            params: {id: id.toString()}
        }
    })

    return {
        paths:
        paths,
        fallback: false
    }
}

export default Index;
