import AddTask from "@/components/AddTask";
import DateFilter from "@/components/DateFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListPagination from "@/components/ListPagination";
import StatsAndFilter from "@/components/StatsAndFilter";

import TaskList from "@/components/TaskList";
import React from "react";

const HomePage = () => {
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
          <AddTask />
          <StatsAndFilter />
          <TaskList />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <ListPagination />
            <DateFilter />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
