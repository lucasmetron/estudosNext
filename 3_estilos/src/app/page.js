import ContainerComp from "@/components/ContainerComp";
import SassComModule from "@/components/SassComModule";
import style from "./page.module.css";
import MyComponentTailwind from "@/components/MyComponentTailwind";
import CompStyledComponents from "@/components/CompStyledComponents";

export default function Home() {
  return (
    <div className="">
      {/* 1- css global */}
      <h1>Meu titulo</h1>

      {/* 2- css module */}
      <h1 className={style.textH1}>CSS Module</h1>

      {/* 3- tailwind */}
      <MyComponentTailwind />

      {/* 4- SASS */}
      <ContainerComp />

      {/* 5- SASS com Module*/}
      <SassComModule />

      {/* 6- Styled components*/}
      <CompStyledComponents />
    </div>
  );
}
