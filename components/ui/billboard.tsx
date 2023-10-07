import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="drop-shadow-lg rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover dark:brightness-50 dark:fade-in-30 fade"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-x-8">
          <div
            className="font-bold text-5xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white z-50"
            style={{ filter: "brightness(100%)" }} // Add this line to override the brightness value
          >
            {/* label from billboard types.tsx */}
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
