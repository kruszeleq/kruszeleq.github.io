import Link from "next/link";
import { BiHome } from "react-icons/bi";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-white ">
			<h1 className="text-6xl font-bold mb-4 text-red-400">404</h1>
			<p className="text-xl mb-8">Nie ma takiej strony!</p>
			<Link href="/" className="inline-flex items-center border border-red-400 bg-red-400 bg-opacity-10 px-5 py-2 rounded-xl">
				<BiHome className="w-5 h-5 mr-2" /> <span>Back to home</span>
			</Link>
		</div>
	);
};
export default NotFound;
