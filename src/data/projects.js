export const projects = [
  {
    id: 1,
    title: "SSO MIMAROPA Portal",
    status: "Live system",
    stack: ["Laravel(PHP)", "React", "Keycloak"],
    image: new URL("../assets/images/projects/dswd/portalv2/reservation-page.png", import.meta.url).href,
    description:
      "Centralized authentication and app launcher for DSWD MIMAROPA services.",
    metrics: ["SSO", "RBAC", "Microservices"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 2,
    title: "FACED IS",
    status: "Production",
    stack: ["Laravel(PHP)", "MySQL", "Bootstrap"],
    image: new URL("../assets/images/projects/dswd/faced-is/family-overview.png", import.meta.url).href,
    description: "Information system for case tracking and regional reporting.",
    metrics: ["Reports", "Workflow", "Audit"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 3,
    title: "PMIS",
    status: "Internal tool",
    stack: ["Laravel(PHP)", "Node.js", "MySQL"],
    image: new URL("../assets/images/projects/dswd/pmis/performance-dashboard.png", import.meta.url).href,
    description: "Project monitoring dashboard for milestones, files, and updates.",
    metrics: ["Tracking", "Dashboards", "Exports"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 4,
    title: "DTRMIS",
    status: "Production",
    stack: ["Laravel(PHP)", "MySQL", "Bootstrap"],
    image: new URL("../assets/images/projects/dswd/dtrmis/attendances.png", import.meta.url).href,
    description: "Daily Time Record Monitoring Information System.",
    metrics: ["Attendance", "DTR", "Monitoring"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 5,
    title: "PC Inventory",
    status: "Internal tool",
    stack: ["React(js)", "Node.js", "MySQL"],
    image: new URL("../assets/images/projects/dswd/pc-inventory/Info-collected.png", import.meta.url).href,
    description: "Personal computer inventory and tracking system.",
    metrics: ["Inventory", "Hardware", "Tracking"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 6,
    title: "Queueing IS",
    status: "Live system",
    stack: ["Laravel(PHP)", "React", "MySQL"],
    image: new URL("../assets/images/projects/dswd/queueing-is/queue_display.png", import.meta.url).href,
    description: "Queueing Information System for customer service management.",
    metrics: ["Queueing", "Real-time", "Display"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 7,
    title: "TEMIS",
    status: "Production",
    stack: ["Laravel(PHP)", "MySQL", "Bootstrap"],
    image: new URL("../assets/images/projects/dswd/temis/tev_monitoring.png", import.meta.url).href,
    description: "Travel Expense Monitoring Information System.",
    metrics: ["Expenses", "Travel", "Monitoring"],
    components: null,
    company: "DSWD MIMAROPA"
  },
  {
    id: 8,
    title: "Tilapia Aquaculture Water Parameter Monitoring",
    status: "Live System",
    stack: ["Vue3", "Websocket", "C++"],
    image: new URL("../assets/images/projects/freelance/aquaculture.jpg", import.meta.url).href,
    description: "To monitor the water quality",
    metrics: ["Monitoring", "Real-time"],
    components: ["Esp8266", "Arduino"],
    company: "Freelance"
  },
  {
    id: 9,
    title: "Aquarium Led Controls",
    status: "Live",
    stack: ["React Native", "MQTT", "C++"],
    image: new URL("../assets/images/projects/personal/aquarium-led.jpg", import.meta.url).href,
    description: "Control My Aquarium LED Manually and automatically using ESP8266 microcontroller",
    metrics: ["Automation"],
    components: ["Esp8266", "4 channel Relay", "12v LEDs"],
    company: "Personal"
  },
  {
    id: 10,
    title: "Monthly Budget Planner",
    status: "Development",
    stack: ["React Native(JS)", "Sqlite", "nodejs"],
    image: new URL("../assets/images/projects/personal/budget-planner.jpg", import.meta.url).href,
    description: "Control My Aquarium LED Manually and automatically using ESP8266 microcontroller",
    metrics: ["Automation"],
    company: "Personal"
  }
];

