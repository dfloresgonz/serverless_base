# Requerimientos

1. serverless v4
2. yarn
3. serverless compose `npm install -g @serverless/compose`

# Yarn

### Comandos

`npm install -g yarn`

`yarn init -y`

Agregar al package.json
"private": true,
  "workspaces": [
    "services/*/*"  // Esto incluye todos los subdirectorios de services
  ]

----
### Nueva función

Al crear una nueva función se debe crear el package.json

```bash
cd services/service1/<<TU_FUNCION>>
yarn init -y
```

Opcional:
`yarn add <nombre-dependencia>`

----
### instalar desde la raiz

`yarn workspace functionA add <<TU_LIBRERIA>>`

### al instalar una nueva dependencia
```
rm yarn.lock
yarn cache clean
yarn install # en la carpeta

rm -rf node_modules yarn.lock
yarn install
```

# Serverless compose

`serverless deploy --service=service1`

----

`sudo yarn deploy`

"**/uuid",
"**/uuid/**",
"**/date-fns",
"**/date-fns/**"

----

`sls deploy --verbose --stage local --param="prof=local"`