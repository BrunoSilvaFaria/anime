import { Banner } from "./styles";

export default function BannerMedium(props) {
  return (
    <Banner>
      <div>
        <h1>{props.title}</h1>
        <p>Welcome to the official Anime blog.</p>
      </div>
    </Banner>
  );
}