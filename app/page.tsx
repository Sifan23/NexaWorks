import CardList from "@/components/CardList";
import NewsBlogs from "@/components/NewsBlogs";
import ToDoList from "@/components/ToDoList";
import { Button } from "@/components/ui/button";
import UpcomingEvents from "@/components/UpcomingEvents";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import TeamSpotlight from "@/components/sections/TeamSpotlight";
import EssentialResources from "@/components/sections/EssentialResources";

export default function Home() {
  return (
    <main className="space-y-4 pt-4 pb-8">
      <Welcome />
      <NewsBlogs />
      <UpcomingEvents />
      <TeamSpotlight />
      <EssentialResources />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <ToDoList />
        <CardList title="Popular Content" />
      </div>
    </main>
  );
}
