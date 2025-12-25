import data from "../data/data.json";
import HomePage from "../components/homepage/HomePage";

export default function Home() {
  return <HomePage data={data} />;
}
