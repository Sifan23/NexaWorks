import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const newsBlogsData = [
  {
    id: 1,
    title: "Company Milestone Achieved",
    badge: "News",
    image:
      "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "We are thrilled to announce reaching a significant milestone in our company journey.",
    author: "Alice Johnson",
    date: "2025-07-20",
  },
  {
    id: 2,
    title: "Tech Innovation Update",
    badge: "Blog",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Exploring the latest advancements in AI and their impact on our industry.",
    author: "Bob Smith",
    date: "2025-07-18",
  },
  {
    id: 3,
    title: "Employee Spotlight",
    badge: "News",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Meet our employee of the month and learn about their contributions.",
    author: "Carol White",
    date: "2025-07-15",
  },
  {
    id: 4,
    title: "Sustainability Goals 2025",
    badge: "Blog",
    image:
      "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Our commitment to sustainability and the steps we're taking this year.",
    author: "David Lee",
    date: "2025-07-10",
  },
];

const NewsBlogs = () => {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Company News & Blogs</h1>
        <Button variant="outline" className="text-sm">
          View All News
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsBlogsData.map((item) => (
          <Card key={item.id} className="flex flex-col h-full p-0">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{item.badge}</Badge>
              </div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-center p-4 pt-0">
              <div className="flex justify-between w-full mb-4">
                <span className="text-sm text-muted-foreground">
                  {item.author}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <Button variant="link" className="w-32">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
