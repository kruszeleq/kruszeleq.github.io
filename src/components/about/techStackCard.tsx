import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

export function TechStackCard({
	name,
	Icon,
	advanced,
	className,
}: {
	name: string;
	Icon: IconType;
	advanced: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"border border-red-400 text-left p-3 w-full md:flex-[1_0_30%] rounded-xl items-center text-white text-lg flex bg-red-400 bg-opacity-10 fadein-up truncate",
				className,
			)}
		>
			<Icon className="mr-3 flex-shrink-0" size={56} />
			<div className="text-left2 text-nowrap">
				<h2 className="font-semibold">{name}</h2>
				<h3 className="text-sm text-red-400">{advanced}</h3>
			</div>
		</div>
	);
}
