# Nova Studio Architecture

## Vision

Nova Studio is the internal operating system for SLOT13 Studios.

Its purpose is to organize projects, assets, development, documentation, bugs, and production into one application.

---

# Project Structure

src/

components/
pages/
layout/
data/
services/
store/
styles/
hooks/
utils/

---

# Feature Architecture

Every feature follows the same structure.

Feature

↓

Component

↓

CSS

↓

Data

↓

Storage

Example:

Activity Feed

ActivityFeed.jsx

ActivityFeed.css

activity.js

activityStorage.js

---

# Development Workflow

Mission

↓

Build

↓

Test

↓

Git Commit

↓

GitHub Push

---

# Code Standards

• Full files only
• Reusable components
• One source of truth
• No duplicated data
• Clean folder structure
• Mobile-friendly layouts