import React, { useState, useCallback, useEffect } from "react";
import "./Desktop.css";
import AppWindow from "./AppWindow";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import { greeting } from "../../portfolio";

/* ═══════════════════════════════════════════════════════════════
   App Content Components
   ═══════════════════════════════════════════════════════════════ */

function ResumeApp() {
  const embedUrl = greeting.resumeLink.replace("/view?usp=sharing", "/preview");
  return (
    <div className="resume-app">
      <div className="resume-app__toolbar">
        <span className="resume-app__toolbar-title">
          📄 Ahmad Tuflihun – Curriculum Vitae
        </span>
        <a
          className="resume-app__btn"
          href={greeting.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Open in Drive
        </a>
      </div>
      <iframe
        title="Ahmad Tuflihun CV"
        className="resume-app__frame"
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
}

function AboutApp() {
  return (
    <div className="about-app">
      <div className="about-app__header">
        <div className="about-app__avatar">AT</div>
        <div>
          <h2 className="about-app__name">Ahmad Tuflihun</h2>
          <p className="about-app__nick">tuf-tuf / leguna</p>
        </div>
      </div>
      <p className="about-app__bio">
        Developer passionate about game dev and mobile app dev. Loves building
        AI Bots, but hates Data Cleaning. Specialises in Flutter, Unity, and
        full-stack web development.
      </p>
      <div className="about-app__info">
        <div className="about-app__info-row">
          <span>📍</span>
          <span>Pontianak, West Borneo, Indonesia</span>
        </div>
        <div className="about-app__info-row">
          <span>📧</span>
          <span>ahmadtuflihunxd@gmail.com</span>
        </div>
        <div className="about-app__info-row">
          <span>📱</span>
          <span>+62 852 4665 4277</span>
        </div>
        <div className="about-app__info-row">
          <span>🌐</span>
          <a
            href="https://github.com/Leguna"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0078d4" }}
          >
            github.com/Leguna
          </a>
        </div>
      </div>
      <p className="about-app__section-title">Skills</p>
      <div className="about-app__skills">
        {[
          "Flutter",
          "Kotlin",
          "React",
          "Node.js",
          "Unity",
          "Unreal Engine",
          "C#",
          "Python",
          "Laravel",
          "Arduino",
          "Raspberry Pi",
          "A-Frame / WebXR",
        ].map((s) => (
          <span key={s} className="skill-chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectsApp() {
  const projects = [
    {
      name: "AR Training App",
      desc:
        "Augmented Reality application for Air Conditioning factory employee training using Unity AR Foundation.",
      tech: ["Unity", "AR Foundation", "C#"],
      url: "https://numetagen.id/",
    },
    {
      name: "Sejutacita / Dealls Mobile App",
      desc:
        "Flutter mobile application for job seekers. Implemented BLoC design pattern and performance improvements.",
      tech: ["Flutter", "Dart", "BLoC"],
      url: "https://usedeall.com/",
    },
    {
      name: "Inventory Management App",
      desc:
        "Android app with QR code scanning and label printer integration for stock management.",
      tech: ["Flutter", "Kotlin", "QR Code"],
      url: "https://idekite.id/",
    },
    {
      name: "WebXR Virtual Event",
      desc:
        "Immersive virtual event platform using A-Frame WebXR for an online conference experience.",
      tech: ["A-Frame", "JavaScript", "WebXR"],
      url: "https://github.com/Leguna",
    },
    {
      name: "IoT PLC WebApp",
      desc:
        "Web application for monitoring and controlling Programmable Logic Controllers via Raspberry Pi.",
      tech: ["React", "Python", "Raspberry Pi", "MQTT"],
      url: "https://github.com/Leguna",
    },
    {
      name: "Discord AI Bot",
      desc:
        "AI-powered bot for community management and teaching-assistant tasks using Python and Discord API.",
      tech: ["Python", "Discord API", "ML"],
      url: "https://github.com/Leguna",
    },
  ];

  return (
    <div className="projects-app">
      <div className="projects-app__header">💼 Projects</div>
      <div className="projects-app__list">
        {projects.map((p) => (
          <a
            key={p.name}
            className="project-card"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card__name">{p.name}</div>
            <div className="project-card__desc">{p.desc}</div>
            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactApp() {
  const socials = [
    { label: "GitHub", url: "https://github.com/Leguna", icon: "🐙" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tuflihun/",
      icon: "💼",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/gorilla_vegetarian/",
      icon: "📷",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/channel/UCDWxRwupxJ1h0xN8AevlKVA",
      icon: "▶️",
    },
    {
      label: "Stack Overflow",
      url: "https://stackoverflow.com/users/8574540/leguna",
      icon: "📚",
    },
  ];

  return (
    <div className="contact-app">
      <h2 className="contact-app__title">📫 Contact</h2>
      <div className="contact-app__rows">
        <div className="contact-app__row">
          <span>📧</span>
          <span>ahmadtuflihunxd@gmail.com</span>
        </div>
        <div className="contact-app__row">
          <span>📱</span>
          <span>+62 852 4665 4277</span>
        </div>
        <div className="contact-app__row">
          <span>📍</span>
          <span>Pontianak, West Borneo, Indonesia 78114</span>
        </div>
      </div>
      <p className="contact-app__links-title">Social Media</p>
      <div className="contact-app__social">
        {socials.map(({ label, url, icon }) => (
          <a
            key={label}
            className="social-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   App Definitions
   ═══════════════════════════════════════════════════════════════ */
const APP_DEFS = [
  {
    id: "resume",
    title: "My CV",
    icon: "📄",
    defaultPos: { x: 80, y: 40 },
    defaultSize: { width: 860, height: 580 },
    component: <ResumeApp />,
  },
  {
    id: "about",
    title: "About Me",
    icon: "👤",
    defaultPos: { x: 140, y: 60 },
    defaultSize: { width: 560, height: 500 },
    component: <AboutApp />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: "🖥️",
    defaultPos: { x: 180, y: 70 },
    defaultSize: { width: 620, height: 510 },
    component: <ProjectsApp />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: "📫",
    defaultPos: { x: 220, y: 80 },
    defaultSize: { width: 460, height: 480 },
    component: <ContactApp />,
  },
];

const DESKTOP_ICONS = [
  { id: "resume", label: "My CV", icon: "📄", action: "app" },
  { id: "about", label: "About Me", icon: "👤", action: "app" },
  { id: "projects", label: "Projects", icon: "🖥️", action: "app" },
  { id: "contact", label: "Contact", icon: "📫", action: "app" },
  {
    id: "github",
    label: "GitHub",
    icon: "🐙",
    action: "url",
    url: "https://github.com/Leguna",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "💼",
    action: "url",
    url: "https://www.linkedin.com/in/tuflihun/",
  },
];

/* ═══════════════════════════════════════════════════════════════
   Desktop Component
   ═══════════════════════════════════════════════════════════════ */
export default function Desktop() {
  // Map of appId → { id, minimized, z }
  const [windows, setWindows] = useState({});
  const [activeId, setActiveId] = useState(null);
  const [showStart, setShowStart] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Prevent body scroll while desktop is mounted
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const nextZ = useCallback((prev) => {
    return Math.max(0, ...Object.values(prev).map((w) => w.z || 0)) + 1;
  }, []);

  const openApp = useCallback(
    (id) => {
      setWindows((prev) => {
        const z = nextZ(prev);
        if (prev[id]) {
          return { ...prev, [id]: { ...prev[id], minimized: false, z } };
        }
        return { ...prev, [id]: { id, minimized: false, z } };
      });
      setActiveId(id);
      setShowStart(false);
    },
    [nextZ]
  );

  const closeApp = useCallback((id) => {
    setWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  const minimizeApp = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: true },
    }));
    setActiveId((prev) => (prev === id ? null : prev));
  }, []);

  const bringToFront = useCallback(
    (id) => {
      setWindows((prev) => {
        const z = nextZ(prev);
        return { ...prev, [id]: { ...prev[id], z } };
      });
      setActiveId(id);
    },
    [nextZ]
  );

  const handleTaskbarApp = useCallback(
    (id) => {
      const win = windows[id];
      if (!win) {
        openApp(id);
      } else if (win.minimized) {
        setWindows((prev) => {
          const z = nextZ(prev);
          return { ...prev, [id]: { ...prev[id], minimized: false, z } };
        });
        setActiveId(id);
      } else if (activeId === id) {
        minimizeApp(id);
      } else {
        bringToFront(id);
      }
    },
    [windows, activeId, openApp, minimizeApp, bringToFront, nextZ]
  );

  const handleIconClick = (icon) => {
    setSelectedIcon(icon.id);
  };

  const handleIconDoubleClick = (icon) => {
    setSelectedIcon(null);
    if (icon.action === "url") {
      window.open(icon.url, "_blank", "noopener,noreferrer");
    } else {
      openApp(icon.id);
    }
  };

  const taskbarApps = APP_DEFS.map((d) => ({
    id: d.id,
    title: d.title,
    icon: d.icon,
    isOpen: !!(windows[d.id] && !windows[d.id].minimized),
    isActive: activeId === d.id,
  }));

  return (
    <div
      className="win11-desktop"
      onMouseDown={() => {
        setSelectedIcon(null);
      }}
    >
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {DESKTOP_ICONS.map((icon) => (
          <div
            key={icon.id}
            className={`desktop-icon${
              selectedIcon === icon.id ? " desktop-icon--selected" : ""
            }`}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleIconClick(icon);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleIconDoubleClick(icon);
            }}
            title={`Double-click to open ${icon.label}`}
          >
            <span className="di-img">{icon.icon}</span>
            <span className="di-label">{icon.label}</span>
          </div>
        ))}
      </div>

      {/* App Windows */}
      {APP_DEFS.map((def) => {
        const win = windows[def.id];
        if (!win || win.minimized) return null;
        return (
          <AppWindow
            key={def.id}
            title={def.title}
            icon={def.icon}
            zIndex={win.z}
            isActive={activeId === def.id}
            defaultPos={def.defaultPos}
            defaultSize={def.defaultSize}
            onClose={() => closeApp(def.id)}
            onMinimize={() => minimizeApp(def.id)}
            onFocus={() => bringToFront(def.id)}
          >
            {def.component}
          </AppWindow>
        );
      })}

      {/* Start Menu */}
      {showStart && (
        <>
          <div
            className="start-backdrop"
            onMouseDown={() => setShowStart(false)}
          />
          <StartMenu
            apps={APP_DEFS}
            onAppOpen={openApp}
            onClose={() => setShowStart(false)}
          />
        </>
      )}

      {/* Taskbar */}
      <Taskbar
        taskbarApps={taskbarApps}
        onAppClick={handleTaskbarApp}
        onStartClick={() => setShowStart((s) => !s)}
        showStartMenu={showStart}
      />
    </div>
  );
}
