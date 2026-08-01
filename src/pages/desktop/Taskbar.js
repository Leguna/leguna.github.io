import React, { useState, useEffect } from "react";

export default function Taskbar({
  taskbarApps,
  onAppClick,
  onStartClick,
  showStartMenu,
}) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const h = now.getHours() % 12 || 12;
  const m = pad(now.getMinutes());
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const dateStr = now.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="taskbar">
      <div className="taskbar__center">
        {/* Start button */}
        <button
          className={`taskbar__btn taskbar__start${
            showStartMenu ? " taskbar__btn--lit" : ""
          }`}
          onClick={onStartClick}
          title="Start"
        >
          <WinLogo />
        </button>

        {/* Pinned / open apps */}
        {taskbarApps.map((app) => (
          <button
            key={app.id}
            className={`taskbar__btn${
              app.isActive
                ? " taskbar__btn--active"
                : app.isOpen
                ? " taskbar__btn--open"
                : ""
            }`}
            onClick={() => onAppClick(app.id)}
            title={app.title}
          >
            <span className="taskbar__app-icon">{app.icon}</span>
          </button>
        ))}
      </div>

      {/* System tray – clock */}
      <div className="taskbar__right">
        <div className="taskbar__clock">
          <div>
            {h}:{m} {ampm}
          </div>
          <div>{dateStr}</div>
        </div>
        <div className="taskbar__notif" title="Notifications">
          <NotifIcon />
        </div>
      </div>
    </div>
  );
}

function WinLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 22 22" fill="white">
      <rect x="0" y="0" width="10" height="10" />
      <rect x="12" y="0" width="10" height="10" />
      <rect x="0" y="12" width="10" height="10" />
      <rect x="12" y="12" width="10" height="10" />
    </svg>
  );
}

function NotifIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
