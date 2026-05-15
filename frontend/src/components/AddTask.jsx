import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import axios from "axios";

import { toast } from "sonner";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTilte] = useState("");
  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await axios.post("http://localhost:5001/api/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Nhiệm vụ ${newTaskTitle} đã được thêm thành công`);
        handleNewTaskAdded();
      } catch (error) {
        console.error("Lỗi khi thêm nhiệm vụ", error);
        toast.error("Lỗi khi thêm nhiệm vụ");
      }
      setNewTaskTilte("");
    } else {
      toast.error("Bạn chưa nhập nội dung nhiệm vụ kìa!");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Bạn muốn làm gì?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTilte(e.taget.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="gradient"
          size="xl"
          className="  px-6"
          onClick={addTask}
        >
          <Plus className="size-5" />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
