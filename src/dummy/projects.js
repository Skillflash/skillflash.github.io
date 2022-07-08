import { project_management, javascript, graphic, training, language, draw, guide } from "../resources/Images";

const Projects = [
  {
    name: "Projektmanagement",
    skills: ["Klassisch", "Agil"],
    image: project_management,
    background: 'project-management',
  },
  {
    name: "Front End Dev.",
    skills: ["JavaScript", "Bootstrap"],
    image: javascript,
    background: 'javascript',
  },
  {
    name: "Grafik Design",
    skills: ["Photoshop", "Subskill"],
    image: graphic,
    background: 'graphic',
  },
  {
    name: "Training",
    skills: ["Personal", "Keynote"],
    image: training,
    background: 'training',
  },
  {
    name: "Fremdsprache",
    skills: ["English", "Spanish"],
    image: language,
    background: 'language',
  },
  {
    name: "Zeichnen",
    skills: ["Flipchart", "Cartoon"],
    image: draw,
    background: 'draw',
  },
  {
    name: "Führung",
    skills: ["Holokratie", "Top-Down"],
    image: guide,
    background: 'guide',
  }
]

export default Projects;