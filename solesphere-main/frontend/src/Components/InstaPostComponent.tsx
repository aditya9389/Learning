import "../CSS/header.scss";
import InstagramIcon from '@mui/icons-material/Instagram';

interface InstaPostComponentProps {
    arr: { imageURL: string }[];
}

// Functional Home Component
export default function InstaPostComponent(props: InstaPostComponentProps) {
    return (
        <>
            <ul className="insta-post-list has-scrollbar">
                {props.arr && props.arr.map((item) => (
                    <li className="insta-post-item">
                        <img src={item.imageURL} width="100" height="100" loading="lazy" alt="Instagram post" className="insta-post-banner image-contain" />
                        <a href="#" className="insta-post-link">
                            <InstagramIcon className="insta-icon" />
                            {/* <ion-icon name="logo-instagram"></ion-icon> */}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
