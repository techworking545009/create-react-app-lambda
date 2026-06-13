import React, { Component } from "react"
import "./App.css"

const skills = [
  { name: "Flutter Development", level: "Beginner", time: "45 min/day", speed: "Normal", deadline: "12 weeks", progress: 68, streak: 14, status: "Active" },
  { name: "AI Prompt Design", level: "Intermediate", time: "30 min/day", speed: "Fast", deadline: "8 weeks", progress: 44, streak: 9, status: "Active" },
  { name: "Public Speaking", level: "Beginner", time: "20 min/day", speed: "Slow", deadline: "16 weeks", progress: 31, streak: 5, status: "Active" },
  { name: "Data Analytics", level: "Advanced", time: "60 min/day", speed: "Hardcore", deadline: "6 weeks", progress: 76, streak: 21, status: "Active" },
]

const roadmap = [
  { label: "Profile", state: "completed", detail: "Device identity, language, goals" },
  { label: "Skill Plan", state: "completed", detail: "AI estimates 126 focused hours" },
  { label: "Daily Quest", state: "current", detail: "Build a mini Flutter habit tracker" },
  { label: "Weekly Boss", state: "pending", detail: "Review history and generate week 2" },
  { label: "Monthly Map", state: "pending", detail: "Publish a portfolio milestone" },
  { label: "Year Mastery", state: "pending", detail: "Capstone, certification, mentoring" },
]

const tasks = [
  { title: "Watch lesson: responsive layouts", status: "Completed", time: "18 min" },
  { title: "Practice: build animated progress ring", status: "Pending", time: "25 min" },
  { title: "Read docs: SQLite offline sync", status: "Missed", time: "15 min" },
]

const analytics = [
  { label: "Attendance", value: "92%" },
  { label: "Tasks done", value: "148" },
  { label: "Milestones", value: "27" },
  { label: "Cache saved", value: "38 MB" },
]

class App extends Component {
  renderSkillCard(skill, index) {
    return (
      <article className="skill-card" key={skill.name}>
        <div className="skill-card__topline">
          <span>Slot {index + 1}/4</span>
          <strong>{skill.status}</strong>
        </div>
        <h3>{skill.name}</h3>
        <p>{skill.level} • {skill.time} • {skill.speed}</p>
        <div className="progress-track" aria-label={`${skill.name} progress`}>
          <span style={{ width: `${skill.progress}%` }} />
        </div>
        <div className="skill-card__meta">
          <b>{skill.progress}% complete</b>
          <span>{skill.streak} day streak</span>
          <span>{skill.deadline}</span>
        </div>
      </article>
    )
  }

  renderRoadmapNode(node, index) {
    return (
      <li className={`map-node map-node--${node.state}`} key={node.label}>
        <div className="map-node__badge">{index + 1}</div>
        <div>
          <h4>{node.label}</h4>
          <p>{node.detail}</p>
        </div>
      </li>
    )
  }

  render() {
    return (
      <main className="app-shell">
        <section className="hero panel">
          <nav className="topbar" aria-label="Primary">
            <div className="brand-mark">SF</div>
            <div>
              <strong>SkillForge AI</strong>
              <span>Offline-first learning OS</span>
            </div>
            <button type="button">Light / Dark</button>
          </nav>

          <div className="hero__content">
            <div>
              <p className="eyebrow">Android • Windows • Web-ready Flutter concept</p>
              <h1>Forge up to four skills with AI roadmaps, daily quests, and productivity analytics.</h1>
              <p className="hero__copy">
                SkillForge AI combines local SQLite storage, smart reminders, voice alerts, PDF exports,
                milestone history, optional cloud backup, and multilingual responsive dashboards.
              </p>
              <div className="hero__actions">
                <button type="button">Create profile</button>
                <button className="ghost" type="button">Export PDF roadmap</button>
              </div>
            </div>
            <aside className="ai-card" aria-label="AI planning questionnaire">
              <span className="pulse" />
              <h2>AI Skill Intake</h2>
              <ul>
                <li>What skill do you want to learn?</li>
                <li>Current level and daily available time?</li>
                <li>Slow, normal, fast, or hardcore speed?</li>
                <li>Deadline and preferred language?</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="panel skills-panel">
            <div className="section-heading">
              <p className="eyebrow">Maximum active slots</p>
              <h2>4 active skills</h2>
            </div>
            <div className="skill-list">{skills.map(this.renderSkillCard)}</div>
          </div>

          <div className="panel roadmap-panel">
            <div className="section-heading">
              <p className="eyebrow">Game-like progression</p>
              <h2>Roadmap map</h2>
            </div>
            <ol className="roadmap">{roadmap.map(this.renderRoadmapNode)}</ol>
          </div>
        </section>

        <section className="insights-grid">
          <div className="panel task-panel">
            <div className="section-heading">
              <p className="eyebrow">Today</p>
              <h2>Daily tasks and attendance</h2>
            </div>
            {tasks.map(task => (
              <div className={`task-row task-row--${task.status.toLowerCase()}`} key={task.title}>
                <span>{task.status}</span>
                <strong>{task.title}</strong>
                <em>{task.time}</em>
              </div>
            ))}
          </div>

          <div className="panel analytics-panel">
            <div className="section-heading">
              <p className="eyebrow">Productivity intelligence</p>
              <h2>Analytics</h2>
            </div>
            <div className="analytics-list">
              {analytics.map(item => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel architecture-panel">
            <div className="section-heading">
              <p className="eyebrow">Clean architecture</p>
              <h2>Offline + online modules</h2>
            </div>
            <div className="module-cloud">
              <span>SQLite local DB</span>
              <span>Lazy loading</span>
              <span>Cache optimization</span>
              <span>AI next-week planner</span>
              <span>Resources recommender</span>
              <span>Device restore</span>
              <span>Cloud backup</span>
              <span>Skill replacement</span>
              <span>Voice reminders</span>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
