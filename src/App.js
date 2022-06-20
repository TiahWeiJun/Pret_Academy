import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import Day1Page from "./pages/Day1/day1";
import { useState } from "react";
import Day2Page from "./pages/Day2/day2";
import Day3Page from "./pages/Day3/day3";
import Day4Page from "./pages/Day4/day4";
import Day5Page from "./pages/Day5/day5";
import Day6Page from "./pages/Day6/day6";
import Day7Page from "./pages/Day7/day7";
import Day8Page from "./pages/Day8/day8";
import Day9Page from "./pages/Day9/day9";
import Day10Page from "./pages/Day10/day10";
import CompletionPage from "./pages/CompletionPage/completionPage";
import GameOverPage from "./pages/GameOverPage/gameOverPage";
import ConsequencePage from "./pages/ConsequencePage/consequencePage";
import { createContext } from "react";

export const AppContext = createContext("Unknown");

const App = () => {
  const [totalBalance, setTotalBalance] = useState(600);
  const [day, setDay] = useState(1);
  const [familyStrike, setFamilyStrike] = useState(0);
  const [healthStrike, setHealthStrike] = useState(0);
  const [workStrike, setWorkStrike] = useState(0);
  const [socialStrike, setSocialStrike] = useState(0);

  return (
    <AppContext.Provider
      value={{
        day,
        totalBalance,
        familyStrike,
        healthStrike,
        workStrike,
        socialStrike,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/1" element={<Day1Page />} />
          <Route path="/2" element={<Day2Page />} />
          <Route path="/3" element={<Day3Page />} />
          <Route path="/4" element={<Day4Page />} />
          <Route path="/5" element={<Day5Page />} />
          <Route path="/6" element={<Day6Page />} />
          <Route path="/7" element={<Day7Page />} />
          <Route path="/8" element={<Day8Page />} />
          <Route path="/9" element={<Day9Page />} />
          <Route path="/10" element={<Day10Page />} />
          <Route path="/completion" element={<CompletionPage />} />
          <Route path="/gameOver" element={<GameOverPage />} />
          <Route path="/consequence" element={<ConsequencePage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
