import dynamic from "next/dynamic";
import { Suspense } from "react";

const Index = () => {
  const Feed = dynamic(
    () => import("../Pages/Feed").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed />
      </Suspense>
    </div>
  );
};

export default Index;
