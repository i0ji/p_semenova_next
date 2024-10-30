import { testVar } from "public/test";
import { Header, Slides, Footer } from "@/components/index"

export default function Home() {

  let testfunc = testVar + 4;
  console.log(testVar);

  return (
    <>
      <Header />
      <Slides />
      <Footer />
    </>
  );
}
