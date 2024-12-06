

const Preview = ({ generalInfo, skillsList }) => {
  return (
    <div className="mx-auto w-4/5">
      <h1>Full Name:{generalInfo.fullname}</h1>
      <h3>Email: {generalInfo.email}</h3>
      <h3>Phone: {generalInfo.phone}</h3>
      <h3>About me: {generalInfo.aboutme}</h3>
     
      <ul className="list-inside list-disc">
      <h3>Skill</h3>
        {
          skillsList.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Preview;
