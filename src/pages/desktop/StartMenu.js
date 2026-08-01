import React from "react";

export default function StartMenu({ apps, onAppOpen, onClose }) {
  return (
    <div className="start-menu" onMouseDown={(e) => e.stopPropagation()}>
      {/* Search bar */}
      <div className="start-menu__search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="start-menu__search-placeholder">
          Search for apps, files, settings
        </span>
      </div>

      {/* Pinned section */}
      <div className="start-menu__section-label">Pinned</div>
      <div className="start-menu__grid">
        {apps.map((app) => (
          <button
            key={app.id}
            className="start-menu__app"
            onClick={() => {
              onAppOpen(app.id);
              onClose();
            }}
          >
            <div className="start-menu__app-icon">{app.icon}</div>
            <div className="start-menu__app-name">{app.title}</div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="start-menu__footer">
        <div className="start-menu__user">
          <div className="start-menu__avatar">AT</div>
          <span>Ahmad Tuflihun</span>
        </div>
        <button
          className="start-menu__power"
          title="Sign out / Sleep / Shutdown"
          onClick={() => {
            if (window.confirm("Reload the page?")) window.location.reload();
          }}
        >
          <PowerIcon />
        </button>
      </div>
    </div>
  );
}

function PowerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  );
}
