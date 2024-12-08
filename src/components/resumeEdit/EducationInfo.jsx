// for education fields

const EducationInfo = ({ educationList, setEducationList }) => {
  const addEducation = () => {
    const newEdu = { name: "" };
    const updatedEdu = [...educationList, newEdu];
    setEducationList(updatedEdu);
  };

  const handleDeleteEducation = (index) => {
    const updatedEdu = educationList.filter((_, i) => i !== index);
    setEducationList(updatedEdu);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEdu = [...educationList];
    updatedEdu[index] = { ...updatedEdu[index], [name]: value };
    setEducationList(updatedEdu);
  };

  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow rounded-lg border border-white border-opacity-10 bg-base-200 shadow-lg"
    >
      <input type="checkbox" />
      <h2 className="collapse-title text-2xl font-bold">Education</h2>
      <div className="collapse-content">
        {educationList.map((edu, index) => (
          <div
            tabIndex={0}
            key={index}
            className={`collapse collapse-plus mb-3 border border-white border-opacity-10 bg-base-100`}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {edu.name ? edu.name : "Enter Institute Details"}
            </div>
            <div className="collapse-content flex flex-col gap-3">
              {/* Institute Name */}
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Institute Name
                <input
                  name="name"
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="grow"
                  value={edu.name}
                />
              </label>
              {/* Institute Degree */}
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Degree
                <input
                  name="degree"
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="grow"
                  value={edu.degree}
                />
              </label>
              <label
                className="input input-bordered flex items-center gap-2 font-medium"
                htmlFor=""
              >
                Passing year
                {/* Institute year */}
                <input
                  name="year"
                  onChange={(e) => handleInputChange(e, index)}
                  type="number"
                  max={2030}
                  min={1950}
                  className="grow [max-length:4]"
                  value={edu.year}
                />
              </label>

              <button
                type="button"
                className="btn btn-error btn-sm mx-auto mt-2 w-fit"
                onClick={() => handleDeleteEducation(index)}
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
          onClick={addEducation}
          className="btn btn-outline btn-sm mx-auto mt-5 block"
        >
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
