import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchBar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <div className="flex py-6">
            <NavBar />
            <Outlet />
          </div>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
