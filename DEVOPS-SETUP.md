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


## 10. Docker Containerisation

Created a Dockerfile to containerise the Next.js application.

Docker allows the application to run in an isolated environment with its required dependencies.

Commands used:

```bash
docker build -t docker-vercel-practice .
docker run -d -p 3000:3000 --name devops-app docker-vercel-practice
```

The application was successfully accessed at:

http://localhost:3000

## 11. Docker Ignore Configuration

Created a `.dockerignore` file to exclude unnecessary files from the Docker build context.

Excluded files include:
- node_modules
- .next
- .git
- .env files
- npm debug logs

This reduces the Docker build context and prevents sensitive environment files from being copied into the image.

## 12. Environment Variables

Used environment variables instead of hardcoding application configuration.

Example:

```javascript
const appName = process.env.APP_NAME || "DevOps & Cloud Practice";
```

Configuration is stored in `.env.local`.

Sensitive environment files are excluded using `.gitignore` and `.dockerignore`.

## 13. GitHub Actions – CI/CD

Created a GitHub Actions workflow at:

`.github/workflows/docker-build.yml`

The workflow automatically runs when code is pushed to the main branch.

Workflow activities:
1. Checkout the GitHub repository.
2. Build the Docker image.
3. Verify that the Docker build completes successfully.

The first GitHub Actions workflow completed successfully.

## 14. Application Monitoring

Used Docker commands to monitor the application.

Check running containers:

```bash
docker ps
```

View all containers:

```bash
docker ps -a
```

View application logs:

```bash
docker logs devops-app
```

Monitor logs continuously:

```bash
docker logs -f devops-app
```

## 15. Crash Recovery and Troubleshooting

Created `TROUBLESHOOTING.md` containing instructions for:

- Identifying stopped containers.
- Inspecting application logs.
- Restarting crashed containers.
- Configuring Docker restart policies.
- Rebuilding and running the application.

Example restart command:

```bash
docker restart devops-app
```

## 16. Cloud Deployment Verification

Deployed the Next.js application using Vercel.

Verified that the application was accessible through:

https://docker-vercel-practice.vercel.app/

The live website loaded successfully.

Note: Vercel deployment and local Docker containerisation are separate deployment environments.

## 17. Final Conclusion

Successfully completed the DevOps and Cloud deployment practice.

Practical skills gained:

- Docker containerisation
- Dockerfile and .dockerignore
- Environment variable management
- Git and GitHub version control
- GitHub Actions and Continuous Integration
- Application logging and monitoring
- Container restart and crash recovery
- Cloud deployment using Vercel

This exercise provided hands-on experience in maintaining, monitoring, and deploying a web application.
