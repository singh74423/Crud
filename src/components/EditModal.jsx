import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { AxiosInstance } from "../routes/axiosInstance";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props) {
  let token = localStorage.getItem("token");

  const [editBlog, setEditBlog] = React.useState({
    category: "",
    title: "",
    description: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditBlog({ ...editBlog, [name]: value });
  };

  React.useEffect(() => {
    setEditBlog(props.editBlog);
  }, [props.editBlog]);

  const handleOpen = () => {
    if (!token) {
      toast.error("Login Required");
      return;
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    handleClose();
    let res = await AxiosInstance.put(`/blogs/${editBlog.id}`, editBlog);
    if (res.status === 200) {
      toast.success("Blog Updated");
      props.getAllBlogs();
    } else {
      toast.error("Update Failed");
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="px-4 py-2 text-sm font-semibold border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all"
      >
        Edit
      </button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h1 className="text-center font-bold text-2xl mb-5 text-gray-800">
            ✏️ Edit Blog
          </h1>

          <div className="flex flex-col gap-4">
            <TextField
              value={editBlog.category}
              onChange={handleChange}
              name="category"
              label="Category"
              variant="outlined"
              fullWidth
            />
            <TextField
              value={editBlog.title}
              onChange={handleChange}
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
            />
            <TextField
              value={editBlog.description}
              onChange={handleChange}
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
            />
          </div>

          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full block mx-auto mt-6 transition-all"
          >
            Update
          </button>
        </Box>
      </Modal>
    </div>
  );
}