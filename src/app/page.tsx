import CopilotImpactSummary from "./CopilotImpactSummary";
import CommonRiskyBehaviours from "./CommonRiskyBehaviours";
import ResolutionPlan from "./ResolutionPlan";

export default function Home() {
  return (
    <div className="min-h-[100%] w-[100%] p-2 md:p-8 flex items-center justify-between flex-wrap">
      <CopilotImpactSummary />
      <CommonRiskyBehaviours />
      <ResolutionPlan />
    </div>
  );
}
