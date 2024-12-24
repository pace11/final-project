import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function About() {
  return <LayoutComponent metaTitle="Home">About</LayoutComponent>;
}
