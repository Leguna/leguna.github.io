import React, { useState, useRef, useEffect } from "react";

export default function AppWindow({
  title,
  icon,
  children,
  zIndex,
  isActive,
  defaultPos = { x: 100, y: 60 },
  defaultSize = { width: 800, height: 520 },
  onClose,
  onMinimize,
  onFocus,
}) {
  const [pos, setPos] = useState(defaultPos);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const savedPos = useRef(defaultPos);
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      setPos({
        x: Math.max(0, e.clientX - dragOffset.current.x),
        y: Math.max(0, e.clientY - dragOffset.current.y),
      });
    };
    const onUp = () => {
      dragging.current = false;
    };
    const updateViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateViewport();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const onBarMouseDown = (e) => {
    if (e.button !== 0 || isMaximized || isMobile) return;
    dragging.current = true;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    onFocus();
    e.preventDefault();
  };

  const toggleMax = () => {
    if (isMaximized) {
      setPos(savedPos.current);
      setIsMaximized(false);
    } else {
      savedPos.current = pos;
      setIsMaximized(true);
    }
  };

  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 900;
  const responsiveWidth = isMobile
    ? "100vw"
    : Math.min(defaultSize.width, Math.max(280, viewportWidth - 16));
  const responsiveHeight = isMobile
    ? "calc(100dvh - 48px)"
    : Math.min(defaultSize.height, Math.max(180, viewportHeight - 64));
  const style = isMaximized || isMobile
    ? {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "calc(100dvh - 48px)",
        borderRadius: 0,
        zIndex,
        maxWidth: "100vw",
        maxHeight: "calc(100dvh - 48px)",
      }
    : {
        position: "fixed",
        left: Math.min(pos.x, Math.max(0, viewportWidth - responsiveWidth - 8)),
        top: Math.min(pos.y, Math.max(0, viewportHeight - responsiveHeight - 56)),
        width: responsiveWidth,
        height: responsiveHeight,
        zIndex,
        maxWidth: `calc(100vw - 16px)`,
        maxHeight: `calc(100dvh - 64px)`,
      };

  return (
    <div
      className={`app-win${isActive ? " app-win--active" : ""}`}
      style={style}
      onMouseDown={onFocus}
    >
      <div
        className="app-win__bar"
        onMouseDown={onBarMouseDown}
        onDoubleClick={toggleMax}
      >
        <span className="app-win__bar-icon">{icon}</span>
        <span className="app-win__bar-title">{title}</span>
        <div className="app-win__controls">
          <button
            className="app-win__ctrl"
            title="Minimize"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={onMinimize}
          >
            <MinimizeIcon />
          </button>
          <button
            className="app-win__ctrl"
            title={isMaximized ? "Restore" : "Maximize"}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => {
              onFocus();
              toggleMax();
            }}
          >
            {isMaximized ? <RestoreIcon /> : <MaximizeIcon />}
          </button>
          <button
            className="app-win__ctrl app-win__ctrl--close"
            title="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="app-win__body">{children}</div>
    </div>
  );
}

function MinimizeIcon() {
  return (
    <svg width="10" height="1" viewBox="0 0 10 1">
      <rect width="10" height="1" fill="currentColor" />
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <rect
        x="0.5"
        y="0.5"
        width="9"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function RestoreIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <rect
        x="2.5"
        y="0.5"
        width="7"
        height="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M0.5 2.5h2v-2h7v7h-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <line
        x1="0.5"
        y1="0.5"
        x2="9.5"
        y2="9.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <line
        x1="9.5"
        y1="0.5"
        x2="0.5"
        y2="9.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}
