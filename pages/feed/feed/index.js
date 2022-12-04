import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppFeed from "./appFeed";
export default function Feed() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <AppFeed />
      <Footer />
    </div>
  );
}
