import CardList from "@/components/CardList";
import NewsBlogs from "@/components/NewsBlogs";
import ToDoList from "@/components/ToDoList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1 lg:col-span-3">
        <NewsBlogs />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transaction" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ToDoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
