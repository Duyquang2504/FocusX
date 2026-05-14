import { FilterType } from "@/lib/data";
import { Filter } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const StatsAndFilter = ({
  completedTasksCount = 0,
  activeTasksCount = 0,
  filter = "all",
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* Thống kế */}
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="bg-white/50 text-accent-foreground border-info/20 gap-2"
        >
          {completedTasksCount} {FilterType.completed}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-white/50 text-success border-success"
        >
          {activeTasksCount} {FilterType.active}
        </Badge>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "gradient" : "ghost"}
            size="sm"
            className="capitalize "
          >
            <Filter className="size-4" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilter;
