

```markdown
# 📝 PocketTodo

A modern, fast, and lightweight TODO app built with **React**, **TailwindCSS**, and **PocketBase**.

## 🚀 Features

- ✅ Create, update, and delete tasks
- 📂 Organize tasks into collections
- 🔐 User authentication with PocketBase
- 🔄 Real-time updates (optional via PocketBase subscriptions)

 https://pocketodo.netlify.app/

## 🔧 Tech Stack

- [React](https://react.dev/)
- [PocketBase](https://pocketbase.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/) (UI components)
- [TanStack Router](https://tanstack.com/router) 
- [TanStack Form](https://tanstack.com/form)

---

## 📁 Project Structure

```

pockettodo/
├── public/
├── src/
│   ├── components/
     ── types/
│   ├── pages/
│   ├── lib/
│   │   └── pocketbase.ts  // PocketBase client config
│   └── App.tsx
├── tailwind.config.js
├── package.json
└── README.md

````

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ruebenisodev/pockettodo.git

````

### 2. Install Dependencies

```bash
bun install

```

### 3. Configure PocketBase

Update `src/lib/pocketbase.ts`:

```ts
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-staging.temtem.africa');

export default pb;
```

---

### 4. Start the App

```bash
bun run dev

```

App runs at `http://localhost:5173` by default (if using Vite).

---

## ✅ Usage

1. Sign up or log in
2. Add tasks to your TODO list
3. Update or delete tasks
4. Tasks are synced with PocketBase in real-time

---

## 🔐 Environment Variables (optional)

If you're storing sensitive config, use `.env`:

```env
VITE_PB_URL=http://127.0.0.1:8090
```

And in `pocketbase.ts`:

```ts
const pb = new PocketBase(import.meta.env.VITE_PB_URL);
```

---

## 📦 Build for Production

```bash
bun run build
```

---

## 📸 Screenshots

Coming soon...

---

## 🧠 Author

**Rueben Akankobateng**
🇬🇭 Ghana | 🧑‍💻 React + SwiftUI Developer


---

## 📄 License

MIT License – free to use, modify, and distribute.

---

