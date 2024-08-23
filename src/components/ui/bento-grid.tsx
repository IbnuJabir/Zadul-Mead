import { cn } from "@/lib/utils";
import '@/styles/line.css';
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "animated-line grid  gap-4 max-w-7xl mx-auto md:w-[80%] md:h-[100%] ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "inner-line h-full w-full row-span-1 rounded-xl group/bento hover:shadow-xl shadow-input dark:shadow-none dark:bg-black text-center dark:border-white/[0.2] bg-white border border-transparent justify-between items-center flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="w-full group-hover/bento:translate-x-2 transition-all duration-700">
        {icon}
        <div className="font-sans font-bold dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};