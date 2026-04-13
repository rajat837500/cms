# 🚀 InPost CMS – Block-Based Page Builder

A lightweight, block-based content management system inspired by modern CMS platforms like Payload CMS and Notion.

This project allows users to create and manage pages using a visual editor with reusable content blocks such as text, images, and buttons.

---

## ✨ Features

* 🧱 Block-based page editor (Text, Image, Button)
* 📝 Create, edit, and delete pages
* 🔄 Reorder blocks dynamically
* 👀 Live preview of pages
* 💾 Persistent data using localStorage
* 📦 Default data seeding via JSON
* 🎨 Clean dark admin UI + light preview UI

---

## 🏗️ Tech Stack

* **Frontend:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks
* **Storage:** localStorage (Hybrid approach)

---

## 🧠 Data Architecture (Important)

This project uses a **hybrid data system**:

### 1. Default Data (`pages.json`)

* Stored in `/data/pages.json`
* Acts as the **initial seed data**
* Shared across all users

### 2. Local Storage

* Stores user-specific changes
* Becomes the **source of truth after first load**

---

## 🔄 Data Flow

### First Visit

* App checks `localStorage`
* If empty → loads data from `pages.json`
* Saves it into `localStorage`

### After That

* All reads come from `localStorage`
* Any changes (add/edit/delete) update `localStorage`

### Result

* Each user gets:

  * Default content initially
  * Personalized editable version afterward

---

## 📂 Project Structure

```
/components
  /editor        → Block editor UI
  /blocks        → Individual block components

/hooks
  usePages       → Page management logic
  useBlocks      → Block management logic

/lib
  storage.ts     → localStorage logic
  utils.ts       → helper functions

/data
  pages.json     → default seeded content
```

---

## 🔁 Reset Data

To reset back to default data:

* Clear browser localStorage manually
  OR
* Use the reset button (if implemented)

---

## 🚀 Future Improvements

* 🌐 Backend integration (API + database)
* 👥 Multi-user collaboration
* 📱 Responsive preview modes
* 🧩 More block types (Hero, Grid, Cards)
* 🧪 Testing with Playwright / Vitest

---

## 💡 Why This Project?

This project demonstrates:

* Understanding of CMS architecture
* Component-driven UI design
* State and data flow management
* Real-world frontend patterns

---

## 🧑‍💻 Author

Built as part of preparation for frontend engineering roles at companies like InPost.

---
