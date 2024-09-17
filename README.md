# Yarn

### Comandos

npm install -g yarn

yarn init -y

Agregar al package.json
"private": true,
  "workspaces": [
    "services/*/*"  // Esto incluye todos los subdirectorios de services
  ]

### en cada funcion
cd services/service1/functionA
yarn init -y
yarn add <nombre-dependencia>

### instalar desde la raiz
yarn workspace functionA add uuid

yarn workspace functionA remove serverless-plugin-monorepo

### al instalar una nueva dependencia
rm yarn.lock
yarn cache clean
yarn install # en la carpeta

rm -rf node_modules yarn.lock
yarn install

# Serverless compose

serverless deploy --service=service1

----

sudo yarn deploy

"**/uuid",
"**/uuid/**",
"**/date-fns",
"**/date-fns/**"