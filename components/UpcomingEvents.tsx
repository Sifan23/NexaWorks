import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const eventsData = [
  {
    id: 1,
    title: "Team Building Workshop",
    time: "2025-08-01, 9:00 AM - 12:00 PM",
    location: "Conference Room A",
    badge: "Training",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Q3 Strategy Meeting",
    time: "2025-08-05, 2:00 PM - 4:00 PM",
    location: "Boardroom",
    badge: "Event",
    avatar:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "AI Tools Training",
    time: "2025-08-10, 10:00 AM - 1:00 PM",
    location: "Training Center",
    badge: "Training",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Company Town Hall",
    time: "2025-08-15, 11:00 AM - 12:30 PM",
    location: "Auditorium",
    badge: "Event",
    avatar:
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Upcoming Events & Training</h1>
        <Button variant="outline" className="text-sm">
          View Full Calendar
        </Button>
      </div>
      <ScrollArea className="max-h-[400px] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eventsData.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex">
                <div className="w-12 h-12 rounded-full relative overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-md font-semibold mb-2">{item.title}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {item.location}
                    </span>
                  </div>
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default UpcomingEvents;
