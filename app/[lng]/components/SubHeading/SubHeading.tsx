import { images } from "../../constants";
import Image from "next/image";

const SubHeading = ({ title }: { title: string }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>

    <Image
      src={images.mic}
      alt="mic"
      className="mic__img"
      width={40}
      height={40}
    />
  </div>
);

export default SubHeading;
