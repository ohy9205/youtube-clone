import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <>
        <SearchBar />
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <div className="flex">
              <NavBar />
              <Outlet />
            </div>
          </QueryClientProvider>
        </YoutubeApiProvider>
      </>
    </DarkModeProvider>
  );
}

export default App;
