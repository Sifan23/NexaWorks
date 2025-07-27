import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Welcome = () => {
  return (
    <Card className="w-full bg-blue-100 p-1 rounded-lg">
      <CardContent className="flex flex-col justify-center p-6">
        <div className="flex ">
          <div className="text-blue-500 pt-4">
            <Sparkles size={25} />
          </div>
          <div className="flex flex-col pl-2 gap-2 mb-2">
            <h1 className="text-3xl font-bold">Welcome back, Jane Doe!</h1>
            <p className="text-sm text-muted-foreground ">
              Stay updated with the latest from NexaWorks
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Welcome;
