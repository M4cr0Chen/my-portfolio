import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4 md:p-8">
      {/* macOS Terminal Window */}
      <div className="w-full max-w-3xl">
        <div className="bg-[#2d2d2d] rounded-lg shadow-2xl overflow-hidden border border-[#3d3d3d]">
          {/* Terminal Title Bar */}
          <div className="bg-[#3d3d3d] px-4 py-2 flex items-center gap-2">
            {/* Traffic Light Buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
            </div>
            {/* Title */}
            <div className="flex-1 text-center text-[#888] text-sm font-mono">
              ~ — -bash — 80×24
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 md:p-6 font-mono text-sm leading-relaxed">
            {/* Git Diff Command */}
            <p className="text-[#e0e0e0]">
              diff --git a/profile.txt b/profile.txt
            </p>
            <p className="text-[#e0e0e0]">--- a/profile.txt</p>
            <p className="text-[#e0e0e0]">+++ b/profile.txt</p>
            <p className="text-[#6b9fb5]">@@ -1,6 +1,18 @@</p>

            {/* Unchanged lines (context) */}
            <p className="text-[#e0e0e0] mt-2">  Zhenghong Chen</p>
            <p className="text-[#e0e0e0]">  Software Engineer, Waterloo, Ontario</p>

            {/* Added lines - STATUS */}
            <p className="text-[#98c379] mt-4">+ // STATUS: CURRENT</p>
            <p className="text-[#98c379]">
              + Studying CS @{" "}
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#b5e890]"
              >
                University of Waterloo
              </a>
            </p>
            <p className="text-[#98c379]">
              + Software Developer @{" "}
              <a
                href="https://www.geotab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#b5e890]"
              >
                Geotab
              </a>
            </p>
            <p className="text-[#98c379]">
              + Open Source Code Reviewer @{" "}
              <a
                href="https://datacurve.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#b5e890]"
              >
                Datacurve AI
              </a>
            </p>

            {/* Empty line */}
            <p className="text-[#98c379]">+</p>

            {/* Added lines - RESOURCES */}
            <p className="text-[#98c379]">+ // RESOURCES</p>
            <p className="text-[#98c379]">
              + $open{" "}
              <a
                href="/works"
                className="underline hover:text-[#b5e890]"
              >
                projects/
              </a>
            </p>
            <p className="text-[#98c379]">
              + $open{" "}
              <a
                href="https://www.macrochen.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#b5e890]"
              >
                blog_posts/
              </a>
            </p>
            <p className="text-[#98c379]">
              + $open{" "}
              <a
                href="/Zhenghong Chen Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#b5e890]"
              >
                resume.pdf
              </a>
            </p>

            {/* Empty lines */}
            <p className="text-[#e0e0e0]">~</p>
            <p className="text-[#e0e0e0]">~</p>
            <p className="text-[#e0e0e0]">~</p>

            {/* Command prompt */}
            <p className="text-[#e0e0e0] mt-4">
              ~ git:(master)+1 ${" "}
              <span className="inline-block w-2 h-4 bg-[#e0e0e0] animate-pulse"></span>
            </p>
          </div>
        </div>

        {/* Social Links - Outside terminal */}
        <div className="flex items-center justify-center gap-6 mt-6 text-[#666]">
          <a
            href="https://github.com/M4cr0Chen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#98c379] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/zhenghong-chen-974102245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#98c379] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://x.com/zh_mc050503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#98c379] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="mailto:z253chen@uwaterloo.ca"
            className="hover:text-[#98c379] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[#444] text-xs mt-4 font-mono">
          2025 © Zhenghong Chen
        </p>
      </div>

      {/* Decorative star */}
      <div className="fixed bottom-8 right-8 text-4xl text-[#444] opacity-50">
        ★
      </div>
    </div>
  );
}
