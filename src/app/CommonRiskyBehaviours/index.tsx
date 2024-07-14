"use client"; 

import { useEffect, useState } from "react";
import { HiOutlineArrowUp, HiOutlineArrowDown } from "react-icons/hi";
import { IoLockClosed, IoCloudOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import Loader from "../Loader";

interface RiskyBehaviorData {
  main: string;
  color?: string;
  percentage_loss?: string;
  percentage_increase?: string;
}

interface Data {
  title: string;
  components: {
    details: {
      data: {
        "Password Reuse": RiskyBehaviorData;
        "Compromised Password": RiskyBehaviorData;
        "Highly Targeted with Social Engineering": RiskyBehaviorData;
        "Access to Unused Sensitive Data": RiskyBehaviorData;
        "Unapproved SaaS Usage": RiskyBehaviorData;
        "Weak Password": RiskyBehaviorData;
        "Sensitive Data Used on Public AI Apps": RiskyBehaviorData;
      };
    };
  }[];
}

const CommonRiskyBehaviours: React.FC = () => {
  const [data, setData] = useState<Partial<Data>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const url = "https://69704d64-dfac-4c16-8ce1-755e879e0754.mock.pstmn.io/risky-behaviours";
    try {
      const response = await fetch(url);
      const responseData: { content: Data[] } = await response.json();
      setData(responseData.content[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const dataObj = data.components?.[0].details.data;

  return (
    <div className="w-[100%] md:w-[48%] min-w-[100%] md:min-w-[643px] rounded-lg bg-[#1E1E1E] opacity-100 p-2 md:p-7 mb-2 md:mb-5 mx-auto">
      {loading ? <Loader />
        : 
        <>
          <div className="w-[100%] flex flex-wrap p-1 md:p-3">
            {dataObj && Object.entries(dataObj).map(([key, value]) => (
              <div className="bg-[#2B2B2B] rounded-[20px] pl-4 md:pl-6 pr-6 md:pr-9 py-2 flex justify-between items-center w-full mb-2" key={key}>
                <div className="flex items-center w-[80%]">
                  {key === "Password Reuse" && <IoLockClosed className="text-[#FFA355] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Compromised Password" && <IoLockClosed className="text-[#FFA355] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Highly Targeted with Social Engineering" && <BiTargetLock className="text-[#F93873] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Access to Unused Sensitive Data" && <TbNotes className="text-[#90F7BC] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Unapproved SaaS Usage" && <IoCloudOutline className="text-[#60B5EF] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Weak Password" && <IoLockClosed className="text-[#FFA355] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  {key === "Sensitive Data Used on Public AI Apps" && <BsStars className="text-[#DDD58A] text-[14px] md:text-[20px] mr-3 md:mr-5" />}
                  <p className="text-[12px] md:text-[15px] text-white opacity-75">
                    {key} ({value.main})
                  </p>
                </div>
                <div className="flex items-center w-9 md:w-[50px]">
                  {value.color === "red" ? (
                    <HiOutlineArrowUp className="text-[#FF4D4D] text-[13px] md:text-[17px]" />
                  ) : (
                    <HiOutlineArrowDown className="text-[#61E87B] text-[13px] md:text-[17px]" />
                  )}
                  <p className={`text-[12px] md:text-[15px] ml-[3px] font-[500] opacity-100 ${value.color === "red" ? 'text-[#FF4D4D]' : 'text-[#61E87B]'}`}>
                    {(key === "Unapproved SaaS Usage" || key === "Weak Password" || key === "Sensitive Data Used on Public AI Apps") ? (
                      value.color === "red" ? value.percentage_increase : value.percentage_loss
                    ) :
                      value.color === "red" ? value.percentage_loss : value.percentage_increase
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 md:mt-5 mx-1">
            <h3 className="text-[12px] md:text-[16px] opacity-75 text-white">{data.title}</h3>
            <button className="bg-transparent text-[#61E87B] text-[11px] md:text-[14px] font-[500] py-1 px-3 md:px-6 rounded-[40px] border-[3px] border-solid border-[#2F4B34]">
              View all
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default CommonRiskyBehaviours;
