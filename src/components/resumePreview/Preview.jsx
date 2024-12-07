const Preview = ({ generalInfo, skillsList, educationList, workList }) => {
  return (
    <div className="mx-auto w-4/5">
      <h1>Full Name:{generalInfo.fullname}</h1>
      <h3>Email: {generalInfo.email}</h3>
      <h3>Phone: {generalInfo.phone}</h3>
      <h3>About me: {generalInfo.aboutme}</h3>

      <ul className="list-inside list-disc">
        <h3 className="my-5 text-2xl font-bold">Skill</h3>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>

      <ul className="list-inside">
        <h3 className="my-5 text-2xl font-bold">Education</h3>
        {educationList.map((edu, index) => (
          <li key={index} className="my-3">
            <h2>{edu.name}</h2>
            <h3>{edu.degree}</h3>
            <p>{edu.year}</p>
          </li>
        ))}
      </ul>

      <ul className="list-inside">
        <h3 className="my-5 text-2xl font-bold">Work Experience</h3>
        {workList.map((Work, index) => (
          <li key={index} className="my-3">
            <h2>{Work.name}</h2>
            <h3>{Work.title}</h3>
            <p>{Work.date}</p>
            <p>{Work.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
