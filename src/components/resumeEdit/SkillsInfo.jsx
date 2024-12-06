const SkillsInfo = ({ skillsList, setSkillsList }) => {
  const addSkill = () => {
    const newSkill = { name: "" };
    const newSkillList = [...skillsList, newSkill];
    setSkillsList(newSkillList);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkillList = skillsList.filter((_, i) => i !== index);
    setSkillsList(updatedSkillList);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skillsList];
    updatedSkills[index] = { ...updatedSkills[index], [name]: value };
    setSkillsList(updatedSkills);
  };

  return (
    <div className="rounded-lg border border-white border-opacity-10 p-5 shadow-lg">
      {skillsList.map((skill, index) => (
        <form
          key={index}
          className="mb-3 flex items-center justify-center gap-2"
        >
          <input
            name="name"
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Add skill"
            type="text"
            className="input input-bordered w-full"
            value={skill.name}
          />
          <button
            type="button"
            className="btn btn-error"
            onClick={() => handleDeleteSkill(index)}
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
          </button>
        </form>
      ))}
      <button onClick={addSkill} className="btn btn-outline mx-auto mt-5 block">
        Add Skill
      </button>
    </div>
  );
};

export default SkillsInfo;
