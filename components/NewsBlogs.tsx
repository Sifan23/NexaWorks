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
    title: "Achievement Unlocked: A Major Company Milestone",
    badge: "Company News",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "We are thrilled to celebrate a significant milestone in our company’s journey, marking a decade of innovation and growth. This achievement reflects the hard work and dedication of our team, paving the way for even greater successes in the future. Join us in commemorating this exciting moment!",
    author: "Emma Thompson",
    date: "2025-07-20",
  },
  {
    id: 2,
    title: "Introducing Our Latest AI Innovations",
    badge: "Product Updates",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Our team has rolled out cutting-edge AI tools designed to revolutionize how we interact with technology. These updates enhance efficiency, streamline workflows, and open new possibilities for our users. Stay tuned for a detailed demo at our upcoming webinar!",
    author: "Michael Chen",
    date: "2025-07-18",
  },
  {
    id: 3,
    title: "Celebrating Our Employee of the Month",
    badge: "Culture & Wellbeing",
    image:
      "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "This month, we’re shining a spotlight on Sarah Davis, whose outstanding contributions have uplifted our team’s spirit and productivity. Her innovative ideas and positive attitude make her a true asset to our company culture. Learn more about her journey and impact in this feature!",
    author: "Lisa Patel",
    date: "2025-07-15",
  },
  {
    id: 4,
    title: "Boost Your Efficiency with These Productivity Tips",
    badge: "Productivity Tips",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Discover our top productivity strategies to optimize your workday and achieve more with less stress. From time-blocking techniques to leveraging new tools, these tips are designed to help you stay focused and efficient. Start implementing them today for a more organized workflow!",
    author: "James Rodriguez",
    date: "2025-07-10",
  },
  {
    id: 5,
    title: "Empowering Growth: New Learning Opportunities",
    badge: "Professional Growth",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "We’re excited to launch a new series of professional development programs aimed at fostering career growth. These workshops offer hands-on training in leadership, technical skills, and personal branding to help you excel. Enroll now to take the next step in your career journey!",
    author: "Sophie Nguyen",
    date: "2025-07-12",
  },
  {
    id: 6,
    title: "Welcoming Our New Leadership Team",
    badge: "New Leadership",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "We’re proud to introduce our new leadership team, bringing fresh perspectives and expertise to guide our company forward. Their vision for innovation and collaboration will shape our future initiatives. Meet the leaders and learn about their plans in our latest update!",
    author: "Robert Kim",
    date: "2025-07-08",
  },
];

const NewsBlogs = () => {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Company News & Blogs</h1>
        <Button variant="outline" className="text-sm text-blue-600/80">
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
            <CardContent className="flex-1 p-4 pt-0 pb-0">
              <div className="flex items-center justify-between mb-0">
                <Badge className="bg-orange-100/50 text-orange-500">
                  {item.badge}
                </Badge>
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
              <Button variant="link" className="w-32 text-blue-600/80">
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
