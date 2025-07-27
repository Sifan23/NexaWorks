import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TeamSpotlight() {
  const team = [
    {
      name: "Jane Doe",
      career: "Engineering",
      role: "Team Spotlight",
      bio: "Leading with passion and clarity, Jane drives innovation across teams, fostering collaboration and delivering cutting-edge solutions.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
      initials: "JD",
    },
    {
      name: "John Smith",
      career: "New Hire - Data Scientist",
      role: "New Hire",
      bio: "John recently joined our Data Science team, bringing fresh perspectives and expertise in predictive analytics to enhance our data-driven decision-making.",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      initials: "JS",
    },
    {
      name: "Emily Rose",
      career: "UI/UX Designer",
      role: "Team Spotlight",
      bio: "Emily crafts intuitive and beautiful user experiences for all our products, ensuring our interfaces are both functional and visually appealing.",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      initials: "ER",
    },
    {
      name: "Michael Ray",
      career: "New Hire - Cloud Architect",
      role: "New Hire",
      bio: "Michael is a crucial addition to our infrastructure team, specializing in scalable cloud solutions to optimize performance and reliability.",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
      initials: "MR",
    },
  ];

  return (
    <section className="py-4 bg-primary-foreground rounded-lg">
      <div className="px-4">
        {/* Title and link */}
        <div className="flex justify-between items-center gap-2 mb-6">
          <h1 className="text-sm sm:text-lg font-medium text-black">
            Team Spotlight
          </h1>
          <Button
            variant="outline"
            className="text-xs sm:text-sm text-blue-600/80 px-1.5 py-0.5 sm:px-4 sm:py-2"
          >
            Meet our team
          </Button>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <Card key={index} className="flex flex-col h-full p-0">
              <CardHeader className="flex justify-center items-center p-4">
                <Avatar className="w-28 h-28 overflow-hidden">
                  <AvatarImage
                    src={member.img}
                    alt={member.name}
                    className="object-cover object-center w-full h-full"
                  />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="flex-1 p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
                <p className="text-sm text-blue-600 mb-2">{member.career}</p>
                <Badge
                  className={`${
                    member.role === "Team Spotlight"
                      ? "bg-orange-100/50 text-orange-500"
                      : "bg-blue-100/50 text-blue-600"
                  }`}
                >
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  {member.bio}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-center">
                <Button variant="link" className="text-blue-600/80">
                  View Profile →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
