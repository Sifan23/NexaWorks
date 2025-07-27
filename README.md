NexaWorks: A Modern Office Intranet

Welcome to NexaWorks, a sleek and user-friendly office intranet we built to make work life easier and more connected! Whether you’re in the office or working remotely, NexaWorks is your hub for team updates, task management, and company resources. We created this for the Frontend Challenge: Office Edition by Axero using Next.js, Tailwind CSS, ShadCN/UI, TypeScript, and Lucide React for icons. It’s clean, responsive, and packed with features to keep employees in the loop.
Features
Here’s what makes NexaWorks awesome:

Light/Dark Mode Toggle: Switch themes via the navbar for a comfy viewing experience.
Team Spotlight: Meet the team with photos, bios, and roles in a responsive grid (grid-cols-1 sm:grid-cols-2 md:grid-cols-4) with badges (bg-orange-100/50 text-orange-500 or bg-blue-100/50 text-blue-600).
Event Calendar: Check out upcoming events like workshops, styled with clean cards.
Resource Center: Quick links to company docs and tools.
Announcements: A bar to share big news with everyone.
To-Do List: Track tasks with a calendar picker and checkboxes that turn blue-600 when checked—super satisfying!
Popular Content: See what learning resources employees are loving.
Sidebar Navigation: A collapsible sidebar that highlights the active page (e.g., Home with bg-blue-500 text-white) and shows an avatar badge with “5” for unread inbox messages.
Responsive Design: Looks great on phones, tablets, and desktops with a grid that adapts smoothly.
Profile Options: A dropdown menu for account settings and sign-out.

We used a blue and orange color scheme (text-blue-600/80 for buttons, bg-blue-600 for checkboxes, bg-orange-100/50 text-orange-500 for badges) to keep it vibrant and cohesive.
Live Demo
Check it out live: https://nexa-works-seven.vercel.app
Getting Started
Want to run NexaWorks locally? Here’s how to get it up and running.
Prerequisites

Node.js: Version 18.x or higher
npm or yarn: For package management
Git: To clone the repo

Installation

Clone the repo:
git clone https://github.com/Sifan23/NexaWorks.git
cd NexaWorks


Install dependencies:
npm install
# or
yarn install


Run the development server:
npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to see NexaWorks in action!


Deployment
To deploy on Vercel (like our live demo):

Push your repo to GitHub.
Connect it to Vercel via the Vercel Dashboard.
Configure the project with:
Framework: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next


Deploy, and Vercel will give you a live URL!

Tech Stack

Next.js (App Router): For server-side rendering and client-side interactivity
Tailwind CSS: Rapid styling with classes like bg-blue-500 and text-blue-600/80
ShadCN/UI: Reusable, accessible components (cards, avatars, checkboxes)
TypeScript: Type safety for cleaner code
Lucide React: Icons for the sidebar (Home, Inbox), to-do list (CalendarIcon), and more
next-themes: For light/dark mode switching
Pexels: Free images for team avatars and news photos
Vercel: For deployment and performance analytics

Project Structure
Here’s a quick look at the key components:

app/: Next.js App Router pages (e.g., layout.js, page.js for the homepage)
components/: Reusable components like AppSidebar.jsx, ToDoList.jsx, TeamSpotlight.jsx
public/: Static assets (e.g., logo.png)
tailwind.config.js: Custom Tailwind styles for the blue/orange theme

Contributing
We’d love for you to contribute! Fork the repo, create a branch, and submit a pull request. Make sure to:

Follow the code style (Prettier is set up).
Test changes locally with npm run dev.
Update README.md if you add new features.

Team
Big shoutout to our team:

@sifan_g – Lead Developer & Coordinator, built the sidebar, to-do list, and homepage integration.
@mattialaval – Developer & Designer, crafted the team and news sections with a sharp UI.

License
NexaWorks is licensed under the MIT License. Images are sourced from Pexels under their free license.
Acknowledgments

Thanks to Axero for hosting the Frontend Challenge!
Shoutout to the Next.js, Tailwind CSS, ShadCN/UI, and Lucide React communities for awesome tools.
Built with ☕ and teamwork!

Have fun exploring NexaWorks! If you have questions or ideas, open an issue or reach out. 🚀
