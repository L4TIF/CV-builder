import { useRef } from "react";

import {
  BasicInfo,
  SkillsInfo,
  WorkExpInfo,
  EducationInfo,
} from "./components/resumeEdit";
import Preview from "./components/resumePreview/Preview";
import demoData from "./data/demoData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useReactToPrint } from "react-to-print";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [generalInfo, setGeneralInfo] = useLocalStorage(
    "generalInfo",
    demoData.generalInfo,
  );
  const [skillsList, setSkillsList] = useLocalStorage(
    "skillsList",
    demoData.skillList,
  );
  const [educationList, setEducationList] = useLocalStorage(
    "educationList",
    demoData.educationList,
  );
  const [workList, setWorkList] = useLocalStorage(
    "workList",
    demoData.workList,
  );

  //for print ref
  const contentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <Header handlePrint={handlePrint} />
      <div className="mx-auto flex flex-col-reverse gap-20 md:w-4/5 lg:flex-row">
        <div className="h-fit w-full">
          <div className="mx-2 flex flex-col gap-10 md:mx-auto">
            <BasicInfo
              generalInfo={generalInfo}
              setGeneralInfo={setGeneralInfo}
            />
            <EducationInfo
              educationList={educationList}
              setEducationList={setEducationList}
            />
            <SkillsInfo skillsList={skillsList} setSkillsList={setSkillsList} />
            <WorkExpInfo workList={workList} setWorkList={setWorkList} />
          </div>
        </div>

        <div className="h-fit w-full overflow-hidden rounded-md shadow-2xl">
          <Preview
            generalInfo={generalInfo}
            skillsList={skillsList}
            educationList={educationList}
            workList={workList}
            contentRef={contentRef}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
