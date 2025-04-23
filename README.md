

# 🚢 Titanic Disaster Dashboard

An interactive web dashboard visualizing survival statistics from the Titanic disaster. Dive into the data by filtering passengers based on gender, class, and age—all presented in a modern, responsive UI.

![Dashboard Preview]
![image](https://github.com/user-attachments/assets/a3176c46-3067-436c-9508-64952feab96c)
![image](https://github.com/user-attachments/assets/63bc7a55-8a64-47d8-85d2-5e1ec7815b32)
![image](https://github.com/user-attachments/assets/28a2a674-5c64-42e0-a8f6-425e6d87b1d7)




---

## ✨ Features

- **📊 Dynamic Visualizations**  
  Explore survival rates using interactive charts. Filter by gender, passenger class, or age group to discover trends.

- **🧩 Modular Architecture**  
  Built with reusable, well-structured components for maintainability and scalability.

- **📱 Responsive Design**  
  Styled with Tailwind CSS to look great on any screen size—mobile, tablet, or desktop.

- **🛠️ Modern Tech Stack**  
  Built with React, TypeScript, Vite, Tailwind CSS, and Recharts for a smooth developer and user experience.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── DataVisualizer.tsx      # Main container for filters + charts
│   ├── DemographicFilter.tsx   # Tab-based filter for gender/class/age
│   ├── PassengerStats.tsx      # Displays key passenger statistics
│   ├── SurvivalChart.tsx       # Recharts-based survival rate graph
│   ├── Header.tsx              # Top banner/header
│   └── ui/                     # UI components (via shadcn/ui)
├── data/
│   └── titanicData.ts          # Titanic dataset (or sample subset)
└── pages/
    └── Index.tsx               # Main dashboard entry point
```

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone <REPO_URL>
cd <REPO_NAME>
npm install
```

Start the local development server:

```bash
npm run dev
```


---

## 🧪 Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/en-US/)
- [Vite](https://vitejs.dev/)

---




## 🧭 Explore the Story Behind the Data

This dashboard offers a visual and interactive way to understand the tragedy of the Titanic disaster through data. Compare survival rates across social classes, gender, and age groups. History meets data science—all in your browser.

---

