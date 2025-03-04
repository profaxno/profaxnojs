<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# profaxnojs
Libreria que permite integrar via rest (@nest/axios) a diferentes microservicios.

```
- Lenguaje: Nodejs (Nest), typescript.
- Tecnologias: npm.
```

## Configuración ambiente dev

### Configuración de la api
* Tener Nest CLI instalado ```npm i -g @nestjs/cli```
* Clonar el proyecto.
* Actualizar node_modules ```npm install```

## Configuración ambiente prod

### Configuración de la api
* Aumentar la version de la libreria en el package.json
* Construir libreria ejecutando ```npm run build-lib```
* Publicar libreria en npm ejecutando ```npm run publish-lib```
