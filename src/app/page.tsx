export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4 md:p-8">
      {/* macOS Terminal Window */}
      <div className="w-full max-w-6xl">
        <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-[#404040]">
          {/* Terminal Title Bar */}
          {/* #323232 */}
          <div className="bg-[#1e1e1e] px-3.5 pt-2 flex items-center">
            {/* Traffic Light Buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
            </div>
              <span className="pl-4">zhenghongchen.ca</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 pt-2 font-mono text-lg leading-7">
            {/* ASCII Art */}
            <pre className="text-[#6f7c75] text-xl leading-none mb-4 overflow-x-auto whitespace-pre scrollbar-none">
{`        ___   ____
      /\` --;^/ ,-_\\     \\|/
     / / --o\\ o-\\ \\\\  --(_)--
    /-/-/|o|-|\\-\\\\|\\\\   /|\\      __  ___                         ________
     '\`  \` |-|   \`\` '           /  |/  /___ _______________     / ____/ /_  ___  ____
           |-|                 / /|_/ / __ \`/ ___/ ___/ __ \\   / /   / __ \\/ _ \\/ __ \\
           |-|O               / /  / / /_/ / /  / /__/ /_/ /  / /___/ / / /  __/ / / /
           |-(\\,__           /_/  /_/\\__,_/_/   \\___/\\____/   \\____/_/ /_/\\___/_/ /_/
        ...|-)\\--,\\_....
    ,;;;;;;;;;;;;;;;;;;;;;;;;,.
~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`}
            </pre>

            {/* Command prompt */}
            <p className="text-[#ccc] mb-1">
              <span className="text-[#6a9fb5]">~/Portfolio/zhenghongchen.ca</span>
              {" "}
              <span className="text-[#f0c674]">git:</span>
              <span className="text-[#cc6666]">(master)</span>
              <span className="text-[#b5bd68]">±1</span>
              {" "}
              <span className="text-[#666]">(0.059s)</span>
            </p>
            <p className="text-[#ccc]">
              <span>git diff</span>
            </p>
            <p className="text-[#e0e0e0]">
              diff --git a/profile.txt b/profile.txt
            </p>
            <p className="text-[#e0e0e0]">--- a/profile.txt</p>
            <p className="text-[#e0e0e0]">+++ b/profile.txt</p>
            <p className="text-[#6b9fb5]">@@ -1,6 +1,18 @@</p>

            {/* Diff content with green background for additions */}
            <div className="space-y-0">
              {/* Line with line number - context */}
              <div className="flex">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="text-[#ccc] flex-1 px-2">  Zhenghong Chen</span>
              </div>
              <div className="flex">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="text-[#ccc] flex-1 px-2">  student, developer, gamer, guitarist</span>
              </div>

              {/* Added lines with green background */}
              <div className="flex bg-[#2d4a3e] mt-4">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#7c7c7c]"> // STATUS: CURRENT</span>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> Studying CS @ </span>
                  <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    University of Waterloo
                  </a>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> Software Developer @ </span>
                  <a href="https://www.geotab.com/" target="_blank" rel="noopener noreferrer" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    Geotab
                  </a>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> Open Source Code Reviewer @ </span>
                  <a href="https://datacurve.ai/" target="_blank" rel="noopener noreferrer" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    Datacurve AI
                  </a>
                </span>
              </div>

              {/* Empty added line */}
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                </span>
              </div>

              {/* Resources section */}
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#7c7c7c]"> // RESOURCES</span>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> $open </span>
                  <a href="/works" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    projects/
                  </a>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> $open </span>
                  <a href="https://www.macrochen.top/" target="_blank" rel="noopener noreferrer" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    blog_posts/
                  </a>
                </span>
              </div>
              <div className="flex bg-[#2d4a3e]">
                <span className="text-[#666] w-8 flex-shrink-0 select-none"></span>
                <span className="flex-1 px-2">
                  <span className="text-[#98c379]">+</span>
                  <span className="text-[#ccc]"> $open </span>
                  <a href="/Zhenghong Chen Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#6a9fb5] underline hover:text-[#8abfd8]">
                    resume.pdf
                  </a>
                </span>
              </div>
            </div>

            {/* New command prompt */}
            <p className="text-[#ccc] mt-8">
              <span className="text-[#6a9fb5]">~/Portfolio/zhenghong-chen.github.io</span>
              {" "}
              <span className="text-[#f0c674]">git:</span>
              <span className="text-[#cc6666]">(master)</span>
              <span className="text-[#b5bd68]">±1</span>
            </p>
            <p className="text-[#ccc] flex items-center">
              <span className="inline-block w-2 h-5 bg-[#f0c674] animate-pulse"></span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8 text-[#666]">
          <a
            href="https://x.com/zh_mc050503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccc] transition-colors"
            aria-label="Twitter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/zhenghong-chen-974102245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccc] transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/M4cr0Chen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccc] transition-colors"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@macrochen9280"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccc] transition-colors"
            aria-label="YouTube"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="mailto:z253chen@uwaterloo.ca"
            className="hover:text-[#ccc] transition-colors"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a
            href="/Zhenghong Chen Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-[#666] px-2 py-0.5 hover:text-[#ccc] hover:border-[#ccc] transition-colors"
          >
            cv
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[#444] text-xs mt-4 font-mono">
          2025 © Zhenghong Chen
        </p>
      </div>
    </div>
  );
}
