"use client"; 

import { useEffect, useState } from "react";
import Loader from "../Loader";

interface Data {
  title: string;
  components: {
    details: {
      data: {
        "Account Breach": {
          totalUsers: number;
          groups: string[];
          status: string;
        }[];
        "Compromised Password": {
          totalUsers: number;
          groups: string[];
          status: string;
        }[];
        "Human Behaviour / Security Training": {
          total_users: number;
          groups: string[];
          status: string;
        };
      };
    };
  }[];
}

const customTagStyles = [
  {
    backgroundColor: "#132D27",
    color: "#23BD8B",
  },
  {
    backgroundColor: "#6F6B00",
    color: "#D6D0A5",
  },
  {
    backgroundColor: "#7E324F",
    color: "#FFB2B2",
  },
];

const ResolutionPlan: React.FC = () => {
  const [data, setData] = useState<Partial<Data>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const url = "https://0d01045e-026f-4d68-b62e-a0544310c896.mock.pstmn.io/issues";
    try {
      const response = await fetch(url);
      const responseData: { content: Data[] } = await response.json();
      setData(responseData.content[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const dataObj = data.components?.[0]?.details.data;

  return (
    <div className="w-[100%] md:w-[48%] min-w-[100%] md:min-w-[643px] rounded-lg bg-[#1E1E1E] opacity-100 p-2 md:p-3 mb-2 md:mb-5 mx-auto">
      {loading ? <Loader />
       : 
        <div className="flex flex-col">
          <h3 className="text-white text-[14px] md:text-[16px] opacity-75 m-3 md:m-5 mt-3">{data.title}</h3>
          <div className="flex justify-between items-center bg-[#121212] h-[30px] md:h-[34px] w-[100%] opacity-70 rounded-lg">
            <span className="text-[#FFFFFFBF] text-[11px] md:text-[12px] opacity-100 ml-[15px] md:ml-[24px]">TYPE</span>
            <span className="text-[#FFFFFFBF] text-[11px] md:text-[12px] opacity-100 mr-[35px] md:mr-[60px]">STATUS</span>
          </div>
          <div className="flex justify-between items-center px-3 py-3 md:p-6 md:py-4">
            <div>
              <p className="text-white opacity-75 text-[12px] md:text-[15px]">
                Account Breach ({dataObj?.["Account Breach"]?.[0]?.totalUsers})
              </p>
              <div className="flex items-start flex-wrap mt-[6px] md:mt-2">
                {dataObj?.["Account Breach"]?.[0]?.groups.map((tag, index) => {
                  const random = Math.floor(Math.random() * customTagStyles.length);
                  return (
                    <span
                      key={index}
                      className={`bg-[${customTagStyles[random].backgroundColor}] rounded-lg text-[11px] md:text-[12px] font-bold text-[${customTagStyles[random].color}] py-[2px] md:py-[5px] px-2 md:px-4 mr-2 mb-[6px] md:mb-2 w-fit`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <button className="bg-[#C6FAB2] text-[#000] text-[12px] md:text-[14px] border-[#ABFB9A50] border-[2px] px-2 md:px-4 font-bold py-[2px] rounded-lg ">
              {dataObj?.["Account Breach"]?.[0]?.status}
            </button>
          </div>
          <div className="h-[1px] bg-[#707070] opacity-40 mx-3 md:mx-5"></div>
          <div className="flex justify-between items-center px-3 py-3 md:p-6 md:py-4">
            <div>
              <p className="text-white opacity-75 text-[12px] md:text-[15px]">
                Compromised Password ({dataObj?.["Compromised Password"]?.[0]?.totalUsers})
              </p>
              <div className="flex items-start flex-wrap mt-2">
                {dataObj?.["Compromised Password"]?.[0]?.groups.map((tag, index) => {
                  const random = Math.floor(Math.random() * customTagStyles.length);
                  return (
                    <span
                      key={index}
                      className={`bg-[${customTagStyles[random].backgroundColor}] rounded-lg text-[11px] md:text-[12px] font-bold text-[${customTagStyles[random].color}] py-[2px] md:py-[5px] px-2 md:px-4 mr-2 mb-[6px] md:mb-2 w-fit`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <button className="bg-[#FAE0B9] text-[#000] text-[12px] md:text-[14px] border-[2px] px-[26px] md:px-[38px] font-bold py-[2px] rounded-lg ">
              {dataObj?.["Compromised Password"]?.[0]?.status}
            </button>
          </div>
          <div className="h-[1px] bg-[#707070] opacity-40 mx-3 md:mx-5"></div>
          <div className="flex justify-between items-center px-3 py-3 md:p-6 md:py-4">
            <div>
              <p className="text-white opacity-75 text-[12px] md:text-[15px]">
                Human Behaviour / Security Training ({dataObj?.["Human Behaviour / Security Training"]?.total_users})
              </p>
              <div className="flex items-start flex-wrap mt-2">
                {dataObj?.["Human Behaviour / Security Training"]?.groups.map((tag, index) => {
                  const random = Math.floor(Math.random() * customTagStyles.length);
                  return (
                    <span
                      key={index}
                      className={`bg-[${customTagStyles[random].backgroundColor}] rounded-lg text-[11px] md:text-[12px] font-bold text-[${customTagStyles[random].color}] py-[2px] md:py-[5px] px-2 md:px-4 mr-2 mb-[6px] md:mb-2 w-fit`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <button className="bg-[#FAE0B9] text-[#000] text-[12px] md:text-[14px] border-[2px] px-[26px] md:px-[38px] font-bold py-[2px] rounded-lg ">
              {dataObj?.["Human Behaviour / Security Training"].status}
            </button>
          </div>
          <div className="h-[1px] bg-[#707070] opacity-40 mx-3 md:mx-5"></div>
          <div className="flex justify-end items-center mt-4 m-3 md:m-6 mb-3 md:mb-4">
            <button className="bg-transparent text-[#61E87B] text-[11px] md:text-[14px] font-[500] py-1 px-3 md:px-6 rounded-[40px] border-[3px] border-solid border-[#2F4B34]">View all</button>
          </div>
        </div>
      }
    </div>
  );
};

export default ResolutionPlan;
