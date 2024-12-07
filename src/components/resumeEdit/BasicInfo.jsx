import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define custom toolbar options
const toolbarOptions = [
  ["bold", "italic", "underline"], // toggled buttons
  [{ list: "ordered" }, { list: "bullet" }], // lists
  ["clean"], // remove formatting button
];

// for basics infoe like name , email, phone

const BasicInfo = ({ generalInfo, setGeneralInfo }) => {
  const handleChange = (field, value) => {
    setGeneralInfo((prevValue) => ({
      ...prevValue,
      [field]: value,
    }));
  };

  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-lg border border-white border-opacity-10 bg-base-200 shadow-lg"
      >
        <input type="checkbox" />
        <h2 className="collapse-title text-2xl font-bold">Basic Info</h2>
        <div className="collapse-content">
          <form className="">
            <fieldset className="flex flex-col gap-5">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="Full name"
                  value={generalInfo.fullname}
                  onChange={(e) => handleChange("fullname", e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={generalInfo.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>

                <input
                  type="tel"
                  className="grow"
                  placeholder="Phone"
                  value={generalInfo.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </label>

              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                value={generalInfo.aboutme}
                onChange={(value) => handleChange("aboutme", value)}
                className="textarea textarea-bordered w-full"
                placeholder="About me"
                  theme="snow"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
