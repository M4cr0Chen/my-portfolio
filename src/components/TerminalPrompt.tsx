/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";

const TERMINAL_PORTFOLIO_URL = "https://marcochen.ca";

const TerminalPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const hasChosen = localStorage.getItem("portfolio-preference");
    if (!hasChosen) {
      setShowPrompt(true);
    }
  }, []);

  const handleChoice = (knowsTerminal: boolean) => {
    if (knowsTerminal) {
      localStorage.setItem("portfolio-preference", "terminal");
      window.location.href = TERMINAL_PORTFOLIO_URL;
    } else {
      localStorage.setItem("portfolio-preference", "classic");
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-4 text-center">
          Welcome!
        </h2>
        <p className="text-zinc-400 mb-6 text-center leading-relaxed">
          I have two versions of my portfolio. Are you familiar with
          terminal/command-line interfaces?
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl transition-colors"
          >
            Yes, show me terminal UI
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 font-medium rounded-xl transition-colors"
          >
            No, classic is fine
          </button>
        </div>
        <p className="text-zinc-500 text-sm mt-4 text-center">
          You can always switch later
        </p>
      </div>
    </div>
  );
};

export default TerminalPrompt;
