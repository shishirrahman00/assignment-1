import NavLogo from "../Navbar/Navlogo";

export default function FooterBottom() {
  return (
    <>
      <div className="flex justify-center items-center text-2xl  mb-5  font-semibold text-gray-900 dark:text-white">
        <NavLogo />
      </div>
      <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <a
          href="#"
          target="_blank"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </>
  );
}
