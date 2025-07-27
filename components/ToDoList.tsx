"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Read company milestone article",
      checked: true,
      category: "NewsBlogs",
    },
    {
      id: "2",
      title: "Review latest AI innovations update",
      checked: false,
      category: "NewsBlogs",
    },
    {
      id: "3",
      title: "Register for AI Innovation Workshop",
      checked: false,
      category: "UpcomingEvents",
    },
    {
      id: "4",
      title: "Attend leadership team webinar",
      checked: false,
      category: "UpcomingEvents",
    },
    {
      id: "5",
      title: "Connect with John Smith (New Hire)",
      checked: false,
      category: "TeamSpotlight",
    },
    {
      id: "6",
      title: "Review Jane Doe's profile",
      checked: true,
      category: "TeamSpotlight",
    },
    {
      id: "7",
      title: "Complete company handbook review",
      checked: true,
      category: "EssentialResources",
    },
    {
      id: "8",
      title: "Book meeting room for team sync",
      checked: false,
      category: "EssentialResources",
    },
    {
      id: "9",
      title: "Update your intranet profile",
      checked: true,
      category: "General",
    },
    {
      id: "10",
      title: "Submit IT support ticket for laptop issue",
      checked: false,
      category: "General",
    },
  ]);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full bg-blue-500 hover:bg-blue-700">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  id={todo.id}
                  checked={todo.checked}
                  onCheckedChange={() => toggleTodo(todo.id)}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label htmlFor={todo.id} className="text-sm  flex-1">
                  {todo.title}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ToDoList;
