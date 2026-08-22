import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, Github, Sparkles, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const components = [
    "button", "card", "modal", "input", "form", "navbar", "carousel", "tooltip", "layout"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      const matchedComponent = components.find(comp => comp.includes(query));
      if (matchedComponent) {
        navigate(`components/${matchedComponent}`);
        setSearchQuery("");
        setMobileMenuOpen(false);
      }
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 md:px-12 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="flex items-center gap-8">
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-bold text-2xl" style={{ color: "var(--text-color)" }}>
            EaseUI
          </h1>
        </div>

        <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-[var(--card-bg)] rounded-xl px-4 py-2.5 border border-[var(--border-color)] w-64">
          <Search size={18} style={{ color: "var(--muted-text)" }} />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="ml-3 bg-transparent outline-none text-sm w-full placeholder-gray-400"
            style={{ color: "var(--text-color)" }}
          />
        </form>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <li
          onClick={() => navigate("components")}
          className="cursor-pointer font-medium transition-all hover:scale-105 relative group"
          style={{ color: "var(--text-color)" }}
        >
          Components
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li 
          onClick={() => navigate("about")}
          className="cursor-pointer font-medium transition-all hover:scale-105 relative group" 
          style={{ color: "var(--muted-text)" }}
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li 
          onClick={() => navigate("templates")}
          className="cursor-pointer font-medium transition-all hover:scale-105 relative group" 
          style={{ color: "var(--muted-text)" }}
        >
          Templates
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
        
        <a
          href="https://github.com/as3148300-prog/Tool-tip-Project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-color)] font-medium hover:bg-[var(--hover-bg)] transition-all hover:scale-105"
          style={{ color: "var(--text-color)" }}
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2.5 rounded-xl border border-[var(--border-color)] hover:bg-[var(--hover-bg)] transition-all hover:scale-105"
          style={{ color: "var(--text-color)" }}
        >
          {mode === "dark" ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-600" />
          )}
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-xl hover:bg-[var(--hover-bg)] transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ color: "var(--text-color)" }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[var(--card-bg)] border-b border-[var(--border-color)] p-6 md:hidden flex flex-col gap-4 shadow-xl">
          <form onSubmit={handleSearch} className="flex items-center bg-[var(--bg-color)] rounded-xl px-4 py-2.5 border border-[var(--border-color)]">
            <Search size={18} style={{ color: "var(--muted-text)" }} />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="ml-3 bg-transparent outline-none text-sm w-full placeholder-gray-400"
              style={{ color: "var(--text-color)" }}
            />
          </form>
          
          <button
            onClick={() => {
              navigate("components");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium py-2 relative group"
            style={{ color: "var(--text-color)" }}
          >
            Components
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button 
            onClick={() => {
              navigate("about");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium py-2 relative group" 
            style={{ color: "var(--muted-text)" }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button 
            onClick={() => {
              navigate("templates");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium py-2 relative group" 
            style={{ color: "var(--muted-text)" }}
          >
            Templates
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <a
            href="https://github.com/as3148300-prog/Tool-tip-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 font-medium"
            style={{ color: "var(--text-color)" }}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          <button
            onClick={() => dispatch(toggleTheme())}
            className="flex items-center gap-2 py-2 font-medium"
            style={{ color: "var(--text-color)" }}
          >
            {mode === "dark" ? (
              <>
                <Sun size={20} className="text-yellow-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={20} className="text-gray-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
