import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export const NavBar = () => {
  return (
    <div className="flex justify-center w-full max-w-96 mx-auto relative sm:max-w-xl lg:max-w-3xl">
      <nav className="bg-white/20 backdrop-blur-md shadow rounded-full fixed px-4 py-2 mt-2 w-96 sm:w-full transition delay-150 duration-300 ease-in-out sm:mt-4 sm:max-w-xl lg:max-w-3xl">
        <ol className="flex justify-between">
          <li className="flex justify-center items-center">
            <button className="bg-white/25 h-full p-2 rounded-full">
              <ChevronUpIcon className="size-4 text-white" />
            </button>
          </li>
          <li className="flex font-medium text-lg justify-center items-center">title</li>
          <li className="flex justify-center items-center">
            <button className="bg-white/25 h-full p-2 rounded-full">
              <ChevronDownIcon className="size-4 text-white" />
            </button>
          </li>
        </ol>
      </nav>
    </div>
  );
};
