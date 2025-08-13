import Image from "next/image";
import card from "../../image/card.webp";
import style from "./InnerImage.module.css";

export default function InnerImage() {
return (
    <div className={style.innerImage}>
        <Image src={card} alt="Venue Image" width={1920} height={1080} />
    </div>
)
}
