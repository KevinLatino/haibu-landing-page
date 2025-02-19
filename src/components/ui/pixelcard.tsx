import { FlickeringGrid } from "../magicui/flickering-grid";

interface PixelCardProps {
  children?: React.ReactNode;
}



export function PixelCard({ children }: PixelCardProps) {
  return (
    <div className="relative h-[450px] w-[450px] overflow-hidden rounded-lg border bg-[#232064] flex flex-col items-center justify-center">
      <FlickeringGrid
        className="absolute fl inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#A5A0FF"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={600}
        width={800}
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-center">{children}</div>
    </div>
  );
}
