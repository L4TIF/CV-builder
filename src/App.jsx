import { useEffect, useState } from "react";
// import ThemeToggler from "./components/ThemeToggler";
import {
  BasicInfo,
  SkillsInfo,
  WorkExpInfo,
  EducationInfo,
} from "./components/resumeEdit";
import Preview from "./components/resumePreview/Preview";
import demoData from "./data/demoData";



const App = () => {
  const [generalInfo, setGeneralInfo] = useState(demoData.generalInfo);
  const [skillsList, setSkillsList] = useState(demoData.skillList);
  const [educationList, setEducationList] = useState(demoData.educationList);
  const [workList, setWorkList] = useState(demoData.workList);

  useEffect(() => {
    const savedCategories = [
      'generalInfo',
      'educationList',
      'workList',
      'skillList',
    ];
    const setStateFunctions = [
      setGeneralInfo,
      setEducationList,
      setWorkList,
      setSkillsList,
    ];

    savedCategories.forEach((key, index) => {
      
      const savedCategory = localStorage.getItem(key);
   
      if (savedCategory) {
        setStateFunctions[index](JSON.parse(savedCategory));
      }
    });
  }, []);

  useEffect(() => {
    const savedCategories = [
      'generalInfo',
      'educationList',
      'workList',
      'skillList',
    ];
    const savedInfo = [generalInfo, educationList, workList, skillsList];

    savedCategories.forEach((key, index) => {

      localStorage.setItem(key, JSON.stringify(savedInfo[index]));
    });
  }, [generalInfo, educationList, workList, skillsList]);

  return (
    <>
      <div className="mt-10 flex w-full flex-col-reverse gap-20 lg:flex-row">
        <div className="h-fit w-full">
          <div className="mx-auto flex w-4/5 flex-col gap-10">
            <BasicInfo
              generalInfo={generalInfo}
              setGeneralInfo={setGeneralInfo}
            />
            <SkillsInfo skillsList={skillsList} setSkillsList={setSkillsList} />
            <WorkExpInfo />
            <EducationInfo />
          </div>
        </div>

        <div className="h-fit w-full">
          <Preview generalInfo={generalInfo} skillsList={skillsList} />
        </div>
      </div>
      {/* <ThemeToggler /> */}
    </>
  );
};

export default App;
