# 🚀 Comment & Announcement System (Backend)

A robust Node.js, Express, and MongoDB backend service built to power multi-level nested comment threads and prioritized system announcements for community platforms.

---

## 🛠 Tech Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Database & ORM:** MongoDB with Mongoose
* **Testing Database:** `mongodb-memory-server` (Zero-dependency local setup)
* **Middleware:** CORS (`cors`)
* **API Testing Tool:** Thunder Client / Postman

---

## ✨ Features

### 💬 1. Nested Comment & Reply System
* **Threaded Discussions:** Support for top-level post comments and unlimited nested replies via self-referencing `parentId` pointers.
* **Cascading Deletion:** Automatically deletes all child replies whenever a parent comment is removed to maintain database integrity.

### 📢 2. Community Announcements
* **System Updates:** Dedicated endpoints for administrators to publish community announcements.
* **Pinned Priority:** Built-in `isPinned` flag ensures important updates stay at the top of the feed.

---

## 📁 Project Structure

```plaintext
community-backend/
├── models/
│   ├── Comment.js          # Mongoose schema for nested comments
│   └── Announcement.js     # Mongoose schema for announcements
├── routes/
│   ├── comments.js         # API routes for comments & replies
│   └── announcements.js    # API routes for announcements
├── server.js               # Express application entry point & DB connection
└── package.json            # Project dependencies & scripts
