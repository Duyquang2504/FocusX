import AddTask from "@/components/AddTask";
import DateFilter from "@/components/DateFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListPagination from "@/components/ListPagination";
import StatsAndFilter from "@/components/StatsAndFilter";

import TaskList from "@/components/TaskList";
import { visibleTaskLimit } from "@/lib/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  const [dateQuery, setDateQuery] = useState("today");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    fetchTask();
  }, [dateQuery]);
  useEffect(() => {
    setPage(1);
  }, [filter, dateQuery]);
  const fetchTask = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5001/api/tasks?filter=${dateQuery}`,
      );
      console.log("🚀 ~ fetchTask ~ res:", res.data);

      setTaskBuffer(res.data.tasks);
      setActiveTaskCount(res.data.activeTaskCount);
      setCompleteTaskCount(res.data.completeTaskCount);
    } catch (error) {
      console.error("Lỗi khi truy xuất task", error);
      toast.error("Lỗi khi truy xuấy tasks");
    }
  };
  const filterTaskType = taskBuffer.filter((task) => {
    switch (filter) {
      case "active":
        return task.status === "active";
      case "complete":
        return task.status === "complete";
      default:
        return true;
    }
  });
  const visibleTask = filterTaskType.slice(
    (page - 1) * visibleTaskLimit,
    page * visibleTaskLimit,
  );

  const totalPages = Math.ceil(filterTaskType.length / visibleTaskLimit);
  const handleTaskChange = () => {
    fetchTask(visibleTask);
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  if (visibleTask.length === 0) {
    handlePrevPage();
  }
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="min-h-screen w-full bg-[#fff7ed] relative">
      {/* Peachy Sunrise Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(180deg, 
          rgba(255,247,237,1) 0%, 
          rgba(255,237,213,0.8) 25%, 
          rgba(254,215,170,0.6) 50%, 
          rgba(251,146,60,0.4) 75%, 
          rgba(249,115,22,0.3) 100%
        ),
        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(254,215,170,0.5) 0%, transparent 50%),
        radial-gradient(circle at 60% 60%, rgba(252,165,165,0.3) 0%, transparent 45%)
      `,
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />
          <AddTask handleNewTaskAdded={handleTaskChange} />
          <StatsAndFilter
            filter={filter}
            setFilter={setFilter}
            activeTasksCount={activeTaskCount}
            completedTasksCount={completeTaskCount}
          />
          <TaskList
            filteredTask={visibleTask}
            filter={filter}
            handleTaskChange={handleTaskChange}
          />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <ListPagination
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
              page={page}
            />
            <DateFilter dateQuery={dateQuery} setDateQuery={setDateQuery} />
          </div>
          <Footer
            activeTaskCount={activeTaskCount}
            completedTaskCount={completeTaskCount}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
