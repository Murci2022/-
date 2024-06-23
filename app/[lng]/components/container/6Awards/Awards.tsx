"use client";
import Image, { StaticImageData } from "next/image";
import "./Awards.css";
import SubHeading from "../../SubHeading/SubHeading";
import { data } from "@/app/[lng]/constants/data";
import { images } from "@/app/[lng]/constants/images";
import { useTranslation } from "@/app/i18n/client";
import { defaultNS } from "@/app/i18n/settings";

const AwardsCard = ({
  award: { imgUrl, title },
  lng,
}: {
  award: { imgUrl: StaticImageData; title: string };
  lng: string;
}) => {
  const { t } = useTranslation(lng, defaultNS);

  return (
    <div className="awards-card">
      <Image src={imgUrl} alt="award logo with number" />
      <div className="awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {t(`awards.${title}.title`, {
            defaultValue: title,
          })}
        </p>
        <p className="p__cormorant">
          {t(`awards.${title}.subtitle`, {
            defaultValue: title,
          })}
        </p>
      </div>
    </div>
  );
};

const Awards = ({ lng }: { lng: string }) => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognitions" />
        <h1 className="h1__cormorant">Thank You</h1>
        <div className="awards-info">
          {data.awards.map((award) => (
            <AwardsCard key={award.title} award={award} lng={lng} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <Image
          src={images.awards_img}
          alt="img of Mate in a park, with sunglasses"
        />
      </div>
    </div>
  );
};

export default Awards;
