import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  LifeBuoy,
  Users,
  LayoutTemplate,
  Calendar,
  Palette,
  HelpCircle,
} from "lucide-react";

export default function EssentialResources() {
  const resources = [
    {
      title: "Company Handbook",
      icon: BookOpen,
      description:
        "All rules, values, and general knowledge about our organization to help you thrive.",
      href: "#",
    },
    {
      title: "Policies & Guidelines",
      icon: FileText,
      description:
        "Important legal, HR, and operational policies you must know to stay compliant.",
      href: "#",
    },
    {
      title: "IT Support",
      icon: LifeBuoy,
      description:
        "Need tech help? Submit tickets or access tools to resolve issues quickly.",
      href: "#",
    },
    {
      title: "HR Services",
      icon: Users,
      description:
        "Access benefits, submit leave requests, and get personal support from HR.",
      href: "#",
    },
    {
      title: "Project Templates",
      icon: LayoutTemplate,
      description:
        "Use our base templates to kickstart your projects efficiently and consistently.",
      href: "#",
    },
    {
      title: "Meeting Room Booking",
      icon: Calendar,
      description: "Find and reserve a room for your next meeting with ease.",
      href: "#",
    },
    {
      title: "Brand Assets",
      icon: Palette,
      description:
        "Download company logos, fonts, and design assets for your projects.",
      href: "#",
    },
    {
      title: "FAQs",
      icon: HelpCircle,
      description:
        "Find answers to commonly asked questions about our processes and tools.",
      href: "#",
    },
  ];

  return (
    <section className="py-4 bg-primary-foreground rounded-lg">
      <div className="px-4">
        {/* Left-aligned title */}
        <div className="mb-6">
          <h1 className="text-lg font-medium ">Essential Resources</h1>
        </div>

        {/* Centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {resources.map((res, idx) => (
            <Card key={idx} className="flex flex-col h-full p-0">
              <CardHeader className="flex justify-center items-center p-4">
                <res.icon className="w-6 h-6 text-blue-600" />
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-0">
                <h2 className="text-lg font-semibold mb-2">{res.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {res.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-center">
                <Button variant="link" className="text-blue-600/80">
                  Access
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
