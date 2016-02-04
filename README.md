## Запуск проекта
### Необходимо
NodeJS версии `v4.1.x`+ и NPM `2.14.x`+
```
 brew install node
```
Установить глобально пакеты `webpack`, `ts-node` и  `typescript`
```
 npm install --global webpack
 npm install --global ts-node
 npm install --global typescript
```

### Старт
Клонируем репозиторий в нужную директорию (ProjectName)
```
git clone https://github.com/awibox/bem-builder-angular.git ProjectName
```
Переходим в директорию проекта
```
cd ProjectName
```
Устанавливаем окружение из package.json
```
npm install
```
Запускаем проект
```
npm start
```
Открыть [http://0.0.0.0:3000](http://0.0.0.0:3000) или [http://localhost:3000](http://localhost:3000) в браузере

## Структура проекта

```
bem-builder-angular/
 ├──public/ 
 |   └──index.html
 ├──source/                          * source         
 |   ├──app
 │   │   ├──pages                
 │   │   │   ├──home
 │   │   │   │   ├──home.ts
 │   │   │   │   ├──home.html
 │   │   │   │   └──home.scss
 │   │   │   └──...
 │   │   └──app.ts
 │   │
 |   ├──build    
 │   │   ├──sass
 │   │   │   ├──build.scss
 │   │   │   └──retina.scss
 │   │   ├──main.ts
 │   │   └──vendor.ts
 │   │
 |   └──modules 
 │       ├──player
 │       │   ├──pipes
 │       │   ├──player.ts
 │       │   ├──player.html
 │       │   └──player.scss
 │       └──...
 │
 ├──test/                      
 │
 ├──tsconfig.json              
 ├──typings.json               
 ├──package.json               
 │
 ├──webpack.config.js          * webpack config
 └──webpack.test.config.js     * our production webpack config
```

## Полезные ссылки
+ webpack - http://webpack.github.io/docs/
+ babel - http://babeljs.io/docs/learn-es2015/
+ handlebars - http://handlebarsjs.com/
+ less - http://lesscss.org/
+ ECMA Script 6 - http://habrahabr.ru/post/252323/
