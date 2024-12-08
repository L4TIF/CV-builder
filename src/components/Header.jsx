import ThemeToggler from "./ThemeToggler";

const Header = ({handlePrint}) => {
  return (
    <header className="items-center justify-between px-8 py-6 md:flex md:p-12 md:py-8">
      <h1 className="mb-5 text-center text-4xl font-bold md:mb-0">
        CV Builder
      </h1>
      <div className="right flex flex-row-reverse items-center justify-between gap-5 md:flex-row md:justify-center">
        <button onClick={handlePrint} className="btn text-white  btn-success  btn-sm md:btn-md">
          Save / Print
        </button>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
