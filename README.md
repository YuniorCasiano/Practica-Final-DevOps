# Practica Final DevOps CI/CD

Aplicacion web simple con integración y despliegue continuo usando GitHub Actions.

## Tecnologias

- Node.js + Express
- Jest (pruebas unitarias)
- Docker
- GitHub Actions
- Render (despliegue)

## Instalacion Local
```bash
npm install
npm start
```

## Ejecutar Pruebas
```bash
npm test
```

## Docker
```bash
docker build -t practica-devops .
docker run -p 3000:3000 practica-devops
```

## CI/CD

El pipeline automatico se ejecuta en cada push y realiza:
1. Instalacion de dependencias
2. Ejecucion de pruebas unitarias
3. Build y push de imagen Docker a Docker Hub
4. Despliegue automatico a produccion
```

**Verifica tu estructura de carpetas:**
```
PRACTICA FINAL DEVOPS/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── node_modules/
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md