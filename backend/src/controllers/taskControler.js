import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const result = await Task.aggregate([
      {
        $facet: {
          tasks: [{ $sort: { createdAt: -1 } }],
          activeCount: [{ $match: { status: "active" } }, { $count: "count" }],
          completeCount: [
            { $match: { status: "complete" } },
            { $count: "count" },
          ],
        },
      },
    ]);
    const tasks = result[0].tasks;
    const activeTaskCount = result[0].activeCount[0]?.count || 0;
    const completeTaskCount = result[0].completeCount[0]?.count || 0;
    res.status(200).json({ tasks, activeTaskCount, completeTaskCount });
  } catch (error) {
    console.error("Lỗi khi gọi getAllTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const addTask = new Task({ title, description });
    const newTask = await addTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    console.error("Lỗi khi gọi createTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        status,
        completedAt,
      },
      { new: true },
    );
    if (!updatedTask) {
      return res.status(500).json({ message: "Nhiệm vụ không tồn tại !" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Lỗi khi gọi updateTask", error);
    res.status(500).json({ message: "Lỗi hệ thống !" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(500).json({ message: "Nhiệm vụ không tồn tại" });
    }
    res.status(200).json(deleteTask);
  } catch (error) {
    console.error("Lỗi khi gọi deleteTask", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
  res.status(201).json({ message: "Task đã được xóa" });
};
