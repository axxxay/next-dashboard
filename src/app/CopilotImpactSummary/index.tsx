"use client"; 

import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import Loader from "../Loader";

interface Data {
    title: string;
    components: {
      details: {
        data: {
          findings_mitigation: {
            findings_processed: string;
            self_resolved_findings: string;
          }[];
          behaviour_and_posture_enhancement: {
            behaviours_improved: string;
            percentage_behaviour_improved: string;
            postures_improved: string;
            percentage_posture_improved: string;
          }[];
          risk_prevention: {
            breaches_prevented: string;
            risks_blocked: string;
          }[];
          efficiency_and_impact: {
            time_saved: string;
            users_interactions: string;
          }[];
        };
      };
    }[];
}

const CopilotImpactSummary : React.FC = () => {

    const [data, setData] = useState<Partial<Data>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const url = "https://858b3436-5262-466b-a4d9-51f41834f1d0.mock.pstmn.io/data";
        try {
            const response = await fetch(url);
            const data: { content: Data[] } = await response.json();
            setData(data.content[0]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const dataObj = data.components?.[0].details.data;

    return (
        <div className="w-[100%] md:w-[48%] min-w-[100%] md:min-w-[643px] rounded-lg bg-[#1E1E1E] opacity-100 p-2 md:p-7 mb-2 md:mb-5 mx-auto">
            {loading ? <Loader />
                :
                <>
                <div className="w-[100%] flex flex-wrap p-1 md:p-3">
                    <div className="w-[50%] border-r-[1px] border-[#707070] border-opacity-40 pb-3 md:pb-7 border-b-[1px]">
                        <h2 className="text-[11px] opacity-75 text-white md:text-[14px]">Findings Mitigation</h2>
                        <div className="w-full flex justify-between items-start pr-2 pt-1">
                            <div className="w-[50%]">
                                <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.findings_mitigation[0].findings_processed}</h1>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Findings Processed</p>
                            </div>
                            <div className="w-[50%]">
                                <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.findings_mitigation[0].self_resolved_findings}</h1>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Self-Resolved Findings</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] border-[#707070] border-opacity-40 pb-7 border-b-[1px] pl-3 md:pl-10">
                        <h2 className="text-[11px] opacity-75 text-white md:text-[14px]">Behaviour & Posture Enhancement</h2>
                        <div className="w-full flex justify-between items-start pr-2 pt-1">
                            <div className="w-[50%]">
                                <div className="flex items-center">
                                    <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.behaviour_and_posture_enhancement[0].behaviours_improved}</h1>
                                    <HiOutlineArrowUp className="text-[#75FC72] text-[10px] md:text-[17px] ml-[2px] mr-[1px] md:ml-1 md:mr-[2px]" />
                                    <span className="text-[10px] md:text-[16px] opacity-100 font-[500] text-[#75FC72]">{dataObj?.behaviour_and_posture_enhancement[0].percentage_behaviour_improved}</span>
                                </div>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Behaviors Improved</p>
                            </div>
                            <div className="w-[50%]">
                            <div className="flex items-center">
                                    <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.behaviour_and_posture_enhancement[0].postures_improved}</h1>
                                    <HiOutlineArrowUp className="text-[#75FC72] text-[10px] md:text-[17px] ml-[2px] mr-[1px] md:ml-1 md:mr-[2px]" />
                                    <span className="text-[10px] md:text-[16px] opacity-100 font-[500] text-[#75FC72]">{dataObj?.behaviour_and_posture_enhancement[0].percentage_posture_improved}</span>
                                </div>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Postures Improved</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] border-r-[1px] border-[#707070] border-opacity-40 pt-4 md:pt-7">
                        <h2 className="text-[11px] opacity-75 text-white md:text-[14px]">Risk Prevention</h2>
                        <div className="w-full flex justify-between items-start pr-2 pt-1">
                            <div className="w-[50%]">
                                <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.risk_prevention[0].breaches_prevented}</h1>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Breaches Prevented</p>
                            </div>
                            <div className="w-[50%]">
                                <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.risk_prevention[0].risks_blocked}</h1>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Risks Blocked</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] border-[#707070] border-opacity-40 pt-4 md:pt-7 pl-3 md:pl-10">
                        <h2 className="text-[11px] opacity-75 text-white md:text-[14px]">Efficiency & Impact</h2>
                        <div className="w-full flex justify-between items-start pr-2 pt-1">
                            <div className="w-[50%]">
                                <div className="flex items-end">
                                    <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.efficiency_and_impact[0].time_saved.slice(0, 3)}</h1>
                                    <span className="text-[11px] md:text-[15px] font-[100] mb-[5.5px] md:mb-2 text-white opacity-100 ml-[1px] md:ml-[2px]">hrs</span>
                                </div>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">Time Saved</p>
                            </div>
                            <div className="w-[50%]">
                                <h1 className="text-[22px] md:text-[40px] opacity-100 font-[200] text-white">{dataObj?.efficiency_and_impact[0].users_interactions}</h1>
                                <p className="text-[10px] md:text-[12px] opacity-60 font-[300] text-[#FFFFFFBF] w-10 md:w-20">User Interactions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 md:mt-12 mx-1">
                    <h3 className="text-[12px] md:text-[16px] opacity-75 text-white">{data.title}</h3>
                    <button className="bg-transparent text-[#61E87B] text-[11px] md:text-[14px] font-[500] py-1 px-3 md:px-6 rounded-[40px] border-[3px] border-solid border-[#2F4B34]">Explore</button>
                </div>
                </>
            }
        </div>
    );
};

export default CopilotImpactSummary;