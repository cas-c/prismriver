# prismriver
plays sounds when things happen

```sh
cd discord
npm install
npm run build
cd ..
cd server
npm install
npm run build
# public dir copy is messed up rn
cd ..
pm2 start discord/dist/index.js --name "prismriver-discord" 
pm2 start server/dist/index.js --name "prismriver-server" 
```
