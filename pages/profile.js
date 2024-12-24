import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Profile() {
  return <LayoutComponent metaTitle="Home">Profile</LayoutComponent>;
}
