# Application Troubleshooting and Crash Recovery

## 1. Overview
This document explains how to monitor, identify, and recover from application failures in a Dockerised Next.js application.

## 2. Common Reasons for Application Crashes

An application may crash due to:
- Insufficient system memory (RAM).
- Application bugs or runtime errors.
- Incorrect environment variables.
- Port conflicts.
- Docker container failures.
- Server or network issues.

## 3. Check Container Status

Run:

```bash
docker ps -a
```

This command displays running and stopped containers.

- Up: Container is running.
- Exited: Container has stopped.
- Restarting: Container is repeatedly restarting.

## 4. Explore Application Logs

Run:

```bash
docker logs devops-app
```

To continuously monitor logs:

```bash
docker logs -f devops-app
```

Logs help identify errors, warnings, and application failures.

## 5. Restart a Crashed Container

Run:

```bash
docker restart devops-app
```

Check its status:

```bash
docker ps
```

## 6. Automatically Restart Containers

Configure a restart policy:

```bash
docker update --restart unless-stopped devops-app
```

This allows Docker to restart the container automatically after certain failures or Docker daemon restarts.

## 7. Troubleshooting Common Problems

| Problem | Possible Solution |
|---|---|
| Container stopped | Run docker restart devops-app |
| Port already in use | Check and free the conflicting port |
| Application error | Inspect docker logs devops-app |
| Environment variable missing | Check environment configuration |
| Docker not running | Start Docker Desktop |
| Build failure | Check Dockerfile and build logs |

## 8. Rebuild the Application

If application changes require a new image:

```bash
docker stop devops-app
docker rm devops-app
docker build -t docker-vercel-practice .
docker run -d -p 3000:3000 --name devops-app --restart unless-stopped docker-vercel-practice
```

If environment variables are required, supply them using:

```bash
docker run -d -p 3000:3000 --env-file .env.local --name devops-app --restart unless-stopped docker-vercel-practice
```

## 9. Conclusion

Docker logs, container monitoring, restart policies, and troubleshooting commands help maintain application availability and recover from failures.

Regular monitoring and automated CI checks help improve application reliability.