import HeadInfo from "../components/HeadInfo";
import axios from "axios";
import photosStyles from "../styles/Photos.module.css"
import Link from "next/link"

const photos = ({photos}: { photos: photoType[] }) => {
    console.log(photos);
    return (
        <div>
            <HeadInfo title={"My Blog Photos"}/>
            <h1>My Photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                        <img src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}></img>
                        <span>{photo.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10");
    const photos = await res.data;

    return {
        props: {
            photos
        }
    }
}

export interface photoType {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

export default photos;
