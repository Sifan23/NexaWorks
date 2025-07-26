import { Button } from "@/components/ui/button";
import Image from "next/image";
import TeamSpotlight from "@/components/sections/TeamSpotlight";
import EssentialResources from "@/components/sections/EssentialResources";

export default function Home() {
  return (
    <main>
      <TeamSpotlight />
      <EssentialResources />
    </main>
  );
}
