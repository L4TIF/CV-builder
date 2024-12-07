import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const WorkExpInfo = ({ workList, setWorkList }) => {
  // Define custom toolbar options
  const toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    [{ list: "ordered" }, { list: "bullet" }], // lists
    ["clean"], // remove formatting button
  ];

  const addWork = () => {
    const newWork = { name: "" };
    const updatedWork = [...workList, newWork];
    setWorkList(updatedWork);
  };

  const handleDeleteWork = (index) => {
    const updatedWork = workList.filter((_, i) => i !== index);
    setWorkList(updatedWork);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWork = [...workList];
    updatedWork[index] = { ...updatedWork[index], [name]: value };
    setWorkList(updatedWork);
  };

  const handleDescriptionChange = (value, index) => {
    const values = [...workList];
    values[index].description = value;
    setWorkList(values);
  };

  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow rounded-lg border border-white border-opacity-10 bg-base-200 shadow-lg"
    >
      <input type="checkbox" />
      <h2 className="collapse-title text-2xl font-bold">Work Experience</h2>
      <div className="collapse-content">
        {workList.map((work, index) => (
          <div
            tabIndex={0}
            key={index}
            className={`collapse collapse-plus mb-3 border border-white border-opacity-10 bg-base-100`}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {work.name ? work.name : "Enter Company Details"}
            </div>
            <div className="collapse-content flex flex-col gap-3">
              {/* Company Name */}
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Company Name
                <input
                  name="name"
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="grow"
                  value={work.name}
                />
              </label>
              {/* Company Title */}
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Title
                <input
                  name="title"
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="grow"
                  value={work.title}
                />
              </label>
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Date
                <input
                  name="date"
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  placeholder="Ex 2020 - Present"
                  className="grow"
                  value={work.date}
                />
              </label>
              <div className=" grow">
                <ReactQuill
                  value={work.description}
                  onChange={(value) => handleDescriptionChange(value, index)}
                  theme="snow"
                  modules={{ toolbar: toolbarOptions }}
                />
              </div>
              <button
                type="button"
                className="btn btn-error btn-sm mx-auto mt-2 w-fit"
                onClick={() => handleDeleteWork(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addWork}
          className="btn btn-outline btn-sm mx-auto mt-5 block"
        >
          Add Work
        </button>
      </div>
    </div>
  );
};

export default WorkExpInfo;
