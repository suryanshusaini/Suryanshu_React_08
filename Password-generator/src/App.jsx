import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);

  return (
    <>
      {/* Background */}
      <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
        {/* soft glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="mx-auto max-w-2xl px-5 py-12">
          {/* Header */}
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              React + Tailwind Password Tool
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Password Generator
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Generate strong passwords with length, numbers, and special
              characters.
            </p>
          </div>

          {/* Card */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="p-6 sm:p-8">
              {/* Input + button */}
              <div className="group flex items-stretch gap-3">
                <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-indigo-500/40 focus-within:ring-2 focus-within:ring-indigo-500/30">
                  <label className="block text-xs text-slate-400">
                    Generated Password
                  </label>
                  <input
                    className="mt-1 w-full bg-transparent font-mono text-base sm:text-lg tracking-wide text-slate-100 placeholder:text-slate-600 outline-none"
                    type="text"
                    value={password}
                    placeholder="password"
                    readOnly
                    ref={passwordRef}
                  />
                </div>

                <button
                  onClick={copyPasswordToClipboard}
                  className="rounded-2xl px-5 sm:px-6 font-semibold text-sm sm:text-base
                             bg-gradient-to-r from-indigo-500 to-violet-500
                             hover:from-indigo-400 hover:to-violet-400
                             active:scale-[0.98] transition
                             shadow-[0_12px_35px_-18px_rgba(99,102,241,0.9)]
                             border border-white/10"
                >
                  Copy
                </button>
              </div>

              {/* Controls */}
              <div className="mt-8 space-y-6">
                {/* Length */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Length</p>
                      <p className="text-xs text-slate-400">
                        Choose between 6 and 100 characters
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-indigo-200">
                      {length}
                    </div>
                  </div>

                  <input
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="mt-4 w-full cursor-pointer accent-indigo-500"
                    onChange={(e) => {
                      setLength(Number(e.target.value));
                    }}
                  />
                </div>

                {/* Toggles */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <div>
                      <p className="text-sm font-semibold">Include Numbers</p>
                      <p className="text-xs text-slate-400">0–9 digits</p>
                    </div>
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-indigo-500"
                      checked={numberAllowed}
                      onChange={() => setNumberAllowed((prev) => !prev)}
                    />
                  </label>

                  <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <div>
                      <p className="text-sm font-semibold">Include Symbols</p>
                      <p className="text-xs text-slate-400">
                        !@#$%^&amp;* etc.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-indigo-500"
                      checked={charAllowed}
                      onChange={() => setCharAllowed((prev) => !prev)}
                    />
                  </label>
                </div>

                {/* Footer note */}
                <p className="text-xs text-slate-400 text-center">
                  Tip: 12–16 length + numbers + symbols is usually strong
                  enough.
                </p>
              </div>
            </div>
          </div>

          {/* Tiny footer */}
          <p className="mt-8 text-center text-xs text-slate-500">
            Built with React hooks: useState, useEffect, useCallback, useRef
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
