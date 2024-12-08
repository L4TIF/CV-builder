const Preview = ({
  generalInfo,
  skillsList,
  educationList,
  workList,
  contentRef,
}) => {
  return (
    <div className="mx-auto text-sm resume-container" ref={contentRef}>
      {/* General Info */}
      <div className="general-info">
      <h1 className="mb-2 mt-4 text-center text-2xl font-bold">{generalInfo.fullName}</h1>
      <div className="contactContainer mb-2 flex justify-center gap-10">
        <h3>Phone: {generalInfo.phone}</h3>
        <h3>Email: {generalInfo.email}</h3>
      </div>
      </div>
      <hr />

      {/* Summary */}
      <div className="mx-4 mt-4 flex gap-16">
        <h2 className="font-bold">Summary</h2>
        <p className="mr-6" dangerouslySetInnerHTML={{ __html: generalInfo.aboutme }}></p>
      </div>

      <hr className="my-4" />

      {/* Skills */}
      <div className="mx-4 flex gap-16">
        <h3 className="mr-10 font-bold">Skills</h3>
        <ul className="w-full">
          {skillsList.map((skill, index) => (
            <li className="font-semibold" key={index}>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Work Experience */}
      <div className="mx-4 flex gap-16 work-experience">
        <h3 className="font-bold">Work Experience</h3>
        <div>
          {workList.map((Work, index) => (
            <div key={index} className="my-3">
              <div className="w-full flex justify-between">
                <h3 className="font-bold">{Work.title}</h3>
                <p className="font-semibold">{Work.date}</p>
              </div>
              <h2 className="font-semibold">{Work.name}</h2>
              <div className="list-disc" dangerouslySetInnerHTML={{ __html: Work.description }}></div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* Education */}
      <div className="mx-4 flex gap-16 education">
        <h2 className="font-bold">Education</h2>
        <ul className="w-full">
          {educationList.map((edu, index) => (
            <li key={index} className="mb-2 flex justify-between">
              <div>
                <h2 className="font-semibold">{edu.name}</h2>
                <h3>{edu.degree}</h3>
              </div>
              <p>{edu.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preview;
