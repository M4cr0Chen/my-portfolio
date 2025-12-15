/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

"use client";

import { useState, useEffect, ReactNode } from "react";

interface CollapsibleSectionProps<T> {
  title: string;
  description?: string;
  items: T[];
  renderItem: (item: T, index: number, isExpanded: boolean) => ReactNode;
  gridClassName: string;
  sectionId: string;
  itemName: string;
  /** Number of items to show in preview */
  previewCount?: number;
  /** Enable expand/collapse on desktop */
  enableOnDesktop?: boolean;
  /** Enable expand/collapse on mobile */
  enableOnMobile?: boolean;
}

function CollapsibleSection<T>({
  title,
  description,
  items,
  renderItem,
  gridClassName,
  sectionId,
  itemName,
  previewCount = 2,
  enableOnDesktop = true,
  enableOnMobile = true,
}: CollapsibleSectionProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isEnabled = isMobile ? enableOnMobile : enableOnDesktop;
  const hasMoreItems = items.length > previewCount;
  const shouldCollapse = isEnabled && hasMoreItems;

  // Show all items if expanded, not collapsible, or few items
  const displayedItems =
    !shouldCollapse || isExpanded ? items : items.slice(0, previewCount);

  return (
    <section id={sectionId} className="section">
      <div className="container">
        <h2 className="headline-2">{title}</h2>

        {description && (
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            {description}
          </p>
        )}

        <div className={`${gridClassName} ${description ? "" : "mt-8"}`}>
          {displayedItems.map((item, index) =>
            renderItem(item, index, isExpanded && index >= previewCount)
          )}
        </div>

        {isClient && shouldCollapse && (
          <div className="mt-6 flex justify-center relative z-10">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors py-2 px-4 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <span>Collapse {itemName}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>
                    Expand {itemName}
                  </span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CollapsibleSection;
