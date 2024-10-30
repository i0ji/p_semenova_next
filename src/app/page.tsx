import { testVar } from "public/test";
import { Header, Slides, Footer } from "@/components/index"

export default function Home() {

  console.log("v: 0.0.1");

  return (
    <>
      <Header />
      <Slides />
      <Footer />
    </>
  );
}
