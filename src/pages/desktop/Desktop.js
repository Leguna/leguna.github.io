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

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [locationLabel, setLocationLabel] = useState("Bandung, Indonesia");
  const [status, setStatus] = useState("loading");

  const loadWeather = useCallback(() => {
   if (!navigator.geolocation) {
     setStatus("fallback");
     setWeather({
       temperature: 27,
       weatherCode: 1,
       description: "Clear skies",
     });
     return;
   }

   navigator.geolocation.getCurrentPosition(
     (position) => {
       const { latitude, longitude } = position.coords;
       const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(3)}&longitude=${longitude.toFixed(3)}&current=temperature_2m,weather_code&timezone=auto`;
       const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude.toFixed(3)}&longitude=${longitude.toFixed(3)}&language=en`;

       Promise.all([
         fetch(weatherUrl).then((response) => response.json()),
         fetch(geocodeUrl).then((response) => response.json()),
       ])
         .then(([weatherResponse, geocodeResponse]) => {
           const current = weatherResponse?.current;
           const place = geocodeResponse?.results?.[0];
           const nextWeather = {
             temperature: Math.round(current?.temperature_2m ?? 27),
             weatherCode: current?.weather_code ?? 1,
             description: getWeatherDescription(current?.weather_code ?? 1),
           };
           const nextLabel = place ? `${place.name}${place.country ? `, ${place.country}` : ""}` : "Your location";
           setWeather(nextWeather);
           setLocationLabel(nextLabel);
           setStatus("ready");
         })
         .catch(() => {
           setWeather({
             temperature: 27,
             weatherCode: 1,
             description: "Clear skies",
           });
           setStatus("fallback");
         });
     },
     () => {
       setWeather({
         temperature: 27,
         weatherCode: 1,
         description: "Clear skies",
       });
       setStatus("fallback");
     }
   );
  }, []);

  useEffect(() => {
   loadWeather();
  }, [loadWeather]);

  const icon = getWeatherIcon(weather?.weatherCode ?? 1);

  return (
   <div className="weather-widget">
     <div className="weather-widget__header">
       <span className="weather-widget__icon">{icon}</span>
       <div>
         <p className="weather-widget__label">Weather</p>
         <h3>{locationLabel}</h3>
       </div>
     </div>
     <div className="weather-widget__body">
       {status === "loading" ? (
         <p>Checking your local forecast…</p>
       ) : (
         <>
           <p className="weather-widget__temp">{weather?.temperature ?? 27}°C</p>
           <p>{weather?.description ?? "Clear skies"}</p>
         </>
       )}
     </div>
   </div>
  );
}

function getWeatherDescription(code) {
  switch (code) {
   case 0:
     return "Clear skies";
   case 1:
   case 2:
     return "Mostly clear";
   case 3:
     return "Cloudy";
   case 45:
   case 48:
     return "Foggy";
   case 61:
   case 63:
   case 65:
     return "Rain";
   case 71:
   case 73:
   case 75:
     return "Snow";
   default:
     return "Pleasant";
  }
}

function getWeatherIcon(code) {
  switch (code) {
   case 0:
     return "☀️";
   case 1:
   case 2:
     return "🌤️";
   case 3:
     return "☁️";
   case 45:
   case 48:
     return "🌫️";
   case 61:
   case 63:
   case 65:
     return "🌧️";
   case 71:
   case 73:
   case 75:
     return "❄️";
   default:
     return "🌦️";
  }
}

function SudokuApp() {
  const initialBoard = [
   [5, 3, null, null, 7, null, null, null, null],
   [6, null, null, 1, 9, 5, null, null, null],
   [null, 9, 8, null, null, null, null, 6, null],
   [8, null, null, null, 6, null, null, null, 3],
   [4, null, null, 8, null, 3, null, null, 1],
   [7, null, null, null, 2, null, null, null, 6],
   [null, 6, null, null, null, null, 2, 8, null],
   [null, null, null, 4, 1, 9, null, null, 5],
   [null, null, null, null, 8, null, null, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [selectedCell, setSelectedCell] = useState(null);
  const [message, setMessage] = useState("Tap a cell and choose a number.");

  const handleCellClick = (row, column) => {
   if (board[row][column] !== null) {
     setMessage("That space is locked. Pick an empty square.");
     return;
   }

   setSelectedCell({ row, column });
   setMessage(`Editing row ${row + 1}, column ${column + 1}.`);
  };

  const handleNumberSelect = (value) => {
   if (!selectedCell) {
     setMessage("First select an empty square.");
     return;
   }

   const nextBoard = board.map((row) => [...row]);
   nextBoard[selectedCell.row][selectedCell.column] = value;
   setBoard(nextBoard);
   setMessage(`Placed ${value} in the selected square.`);
  };

  const resetPuzzle = () => {
   setBoard(initialBoard.map((row) => [...row]));
   setSelectedCell(null);
   setMessage("Puzzle reset. Choose a square to begin.");
  };

  return (
   <div className="sudoku-app">
     <div className="sudoku-app__header">
       <div>
         <h3>Mini Sudoku</h3>
         <p>Try a quick puzzle with a few taps.</p>
       </div>
       <button type="button" onClick={resetPuzzle} className="pill-button">
         Reset
       </button>
     </div>
     <div className="sudoku-app__board" role="grid" aria-label="Sudoku puzzle">
       {board.map((row, rowIndex) =>
         row.map((value, columnIndex) => {
           const isSelected = selectedCell?.row === rowIndex && selectedCell?.column === columnIndex;
           const cellClasses = [
             "sudoku-app__cell",
             value !== null ? "sudoku-app__cell--fixed" : "",
             isSelected ? "sudoku-app__cell--selected" : "",
             rowIndex === 2 || rowIndex === 5 ? "sudoku-app__cell--row-divider" : "",
             columnIndex === 2 || columnIndex === 5 ? "sudoku-app__cell--col-divider" : "",
           ]
             .filter(Boolean)
             .join(" ");

           return (
             <button
               key={`${rowIndex}-${columnIndex}`}
               type="button"
               className={cellClasses}
               onClick={() => handleCellClick(rowIndex, columnIndex)}
             >
               {value ?? ""}
             </button>
           );
         })
       )}
     </div>
     <div className="sudoku-app__controls">
       <div className="sudoku-app__numbers">
         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
           <button key={value} type="button" onClick={() => handleNumberSelect(value)} className="pill-button">
             {value}
           </button>
         ))}
       </div>
       <p className="sudoku-app__message">{message}</p>
     </div>
   </div>
  );
}

function SnakeApp() {
  const BOARD_SIZE = 20;
  const initialSnake = [{ x: 10, y: 10 }, { x: 9, y: 10 }];

  const getRandomFood = useCallback((snake) => {
   const available = [];
   for (let y = 0; y < BOARD_SIZE; y += 1) {
     for (let x = 0; x < BOARD_SIZE; x += 1) {
       if (!snake.some((segment) => segment.x === x && segment.y === y)) {
         available.push({ x, y });
       }
     }
   }
   return available[Math.floor(Math.random() * available.length)] || { x: 0, y: 0 };
  }, []);

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(() => getRandomFood(initialSnake));
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const restartGame = useCallback(() => {
   const freshSnake = [{ x: 10, y: 10 }, { x: 9, y: 10 }];
   setSnake(freshSnake);
   setFood(getRandomFood(freshSnake));
   setDirection({ x: 1, y: 0 });
   setIsRunning(true);
   setGameOver(false);
   setScore(0);
  }, [getRandomFood]);

  useEffect(() => {
   if (!isRunning || gameOver) {
     return undefined;
   }

   const interval = window.setInterval(() => {
     setSnake((prevSnake) => {
       const nextHead = {
         x: prevSnake[0].x + direction.x,
         y: prevSnake[0].y + direction.y,
       };

       const hitWall =
         nextHead.x < 0 || nextHead.y < 0 || nextHead.x >= BOARD_SIZE || nextHead.y >= BOARD_SIZE;
       const hitSelf = prevSnake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

       if (hitWall || hitSelf) {
         setGameOver(true);
         setIsRunning(false);
         return prevSnake;
       }

       const ateFood = nextHead.x === food.x && nextHead.y === food.y;
       const nextSnake = ateFood ? [nextHead, ...prevSnake] : [nextHead, ...prevSnake.slice(0, -1)];
       const nextFood = ateFood ? getRandomFood(nextSnake) : food;

       if (ateFood) {
         setScore((prevScore) => prevScore + 1);
       }
       setFood(nextFood);
       return nextSnake;
     });
   }, 120);

   return () => window.clearInterval(interval);
  }, [BOARD_SIZE, direction, food, gameOver, getRandomFood, isRunning]);

  useEffect(() => {
   const handleKeyDown = (event) => {
     const map = {
       ArrowUp: { x: 0, y: -1 },
       ArrowDown: { x: 0, y: 1 },
       ArrowLeft: { x: -1, y: 0 },
       ArrowRight: { x: 1, y: 0 },
     };

     const nextDirection = map[event.key];
     if (!nextDirection) {
       return;
     }

     event.preventDefault();
     setDirection((prevDirection) => {
       if (prevDirection.x + nextDirection.x === 0 && prevDirection.y + nextDirection.y === 0) {
         return prevDirection;
       }
       return nextDirection;
     });
   };

   window.addEventListener("keydown", handleKeyDown);
   return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDirectionTap = (nextDirection) => {
   setDirection((prevDirection) => {
     if (prevDirection.x + nextDirection.x === 0 && prevDirection.y + nextDirection.y === 0) {
       return prevDirection;
     }
     return nextDirection;
   });
  };

  return (
   <div className="snake-app">
     <div className="snake-app__header">
       <div>
         <h3>Snake</h3>
         <p>Use the arrows or tap the controls to snack your way around the board.</p>
       </div>
       <button type="button" onClick={restartGame} className="pill-button">
         {isRunning ? "Restart" : "Start"}
       </button>
     </div>
     <div className="snake-app__stats">
       <span>Score: {score}</span>
       <span>Status: {gameOver ? "Game over" : isRunning ? "Running" : "Paused"}</span>
     </div>
     <div className="snake-app__board" role="grid" aria-label="Snake board">
       {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
         const x = index % BOARD_SIZE;
         const y = Math.floor(index / BOARD_SIZE);
         const isHead = snake[0]?.x === x && snake[0]?.y === y;
         const isBody = snake.some((segment) => segment.x === x && segment.y === y);
         const isFood = food.x === x && food.y === y;
         const cellClasses = [
           "snake-app__cell",
           isHead ? "snake-app__cell--head" : "",
           isBody && !isHead ? "snake-app__cell--body" : "",
           isFood ? "snake-app__cell--food" : "",
         ]
           .filter(Boolean)
           .join(" ");

         return <div key={`${x}-${y}`} className={cellClasses} />;
       })}
       {!isRunning && !gameOver && (
         <div className="snake-app__overlay">
           <p>Tap start and steer with the arrow keys.</p>
         </div>
       )}
       {gameOver && (
         <div className="snake-app__overlay">
           <p>Game over. Start a new round.</p>
         </div>
       )}
     </div>
     <div className="snake-app__controls">
       <button type="button" onClick={() => handleDirectionTap({ x: 0, y: -1 })} className="pill-button">
         ↑
       </button>
       <button type="button" onClick={() => handleDirectionTap({ x: 0, y: 1 })} className="pill-button">
         ↓
       </button>
       <button type="button" onClick={() => handleDirectionTap({ x: -1, y: 0 })} className="pill-button">
         ←
       </button>
       <button type="button" onClick={() => handleDirectionTap({ x: 1, y: 0 })} className="pill-button">
         →
       </button>
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
  {
    id: "sudoku",
    title: "Sudoku",
    icon: "🧩",
    defaultPos: { x: 260, y: 100 },
    defaultSize: { width: 480, height: 520 },
    component: <SudokuApp />,
  },
  {
    id: "snake",
    title: "Snake",
    icon: "🐍",
    defaultPos: { x: 300, y: 120 },
    defaultSize: { width: 520, height: 560 },
    component: <SnakeApp />,
  },
];

const DESKTOP_ICONS = [
  { id: "resume", label: "My CV", icon: "📄", action: "app" },
  { id: "about", label: "About Me", icon: "👤", action: "app" },
  { id: "projects", label: "Projects", icon: "🖥️", action: "app" },
  { id: "contact", label: "Contact", icon: "📫", action: "app" },
  { id: "sudoku", label: "Sudoku", icon: "🧩", action: "app" },
  { id: "snake", label: "Snake", icon: "🐍", action: "app" },
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

const WINDOW_BASE_Z = 100;

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
        const z = Math.max(nextZ(prev), WINDOW_BASE_Z);
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
        const z = Math.max(nextZ(prev), WINDOW_BASE_Z);
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
          const z = Math.max(nextZ(prev), WINDOW_BASE_Z);
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
