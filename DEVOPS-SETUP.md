# DevOps & Cloud – Docker, WSL and First Deployment

## 1. Project Overview

This project demonstrates the installation and configuration of Docker, WSL 2, Ubuntu Linux, and the deployment of a Next.js application using Vercel.

## 2. System Information

- Operating System: Windows 11
- Linux Distribution: Ubuntu
- WSL Version: WSL 2
- Code Editor: Visual Studio Code
- Framework: Next.js
- Deployment Platform: Vercel

## 3. WSL and Ubuntu Installation

Installed Windows Subsystem for Linux using PowerShell:

```bash
wsl --install -d Ubuntu
```

Created an Ubuntu username and password.

Verified WSL installation:

```bash
wsl --status
wsl --list --verbose
```

Basic Linux commands tested:

```bash
whoami
uname -a
sudo apt update
```

Ubuntu was successfully installed and running on WSL 2.

## 4. Docker Desktop Installation

Installed Docker Desktop on Windows and enabled WSL integration for Ubuntu.

Verified Docker installation:

```bash
docker --version
docker run hello-world
```

The Hello World container ran successfully and displayed:

"Hello from Docker! This message shows that your installation appears to be working correctly."

Also verified Docker from the Ubuntu terminal using:

```bash
docker run hello-world
```

The test container executed successfully.

## 5. Next.js Application

Created a Next.js application using:

```bash
npx create-next-app@latest docker-vercel-practice
```

Started the development server:

```bash
npm run dev
```

Opened the application locally:

http://localhost:3000

Created a simple DevOps and Cloud Practice website using Next.js and Tailwind CSS.

## 6. GitHub Repository

Uploaded the project to GitHub.

Repository:

https://github.com/ketanwork421-ai/docker-vercel-practice

Git commands used:

```bash
git init
git add .
git commit -m "Initial Next.js DevOps practice website"
git branch -M main
git remote add origin https://github.com/ketanwork421-ai/docker-vercel-practice.git
git push -u origin main
```

## 7. Vercel Deployment

Connected the GitHub repository to Vercel.

Selected Next.js as the framework and deployed the application successfully.

Live Deployment URL:

https://docker-vercel-practice.vercel.app/

## 8. Issues and Resolutions

| Issue | Resolution |
|---|---|
| WSL was initially not installed | Installed Ubuntu using `wsl --install -d Ubuntu` |
| Docker needed Linux integration | Enabled Ubuntu integration in Docker Desktop settings |
| Initial Next.js setup required configuration choices | Selected suitable defaults and completed project creation |

## 9. Conclusion

Successfully installed and configured Docker Desktop, WSL 2, and Ubuntu Linux.

Executed the Docker Hello World test container successfully in both Windows and Ubuntu.

Created a Next.js application, uploaded it to GitHub, and deployed it successfully on Vercel.

This practical exercise provided hands-on experience with containerization, Linux environments, version control, and cloud deployment.