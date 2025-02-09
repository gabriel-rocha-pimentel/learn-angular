# Primeiro Projeto

---
Meu primeiro projeto em Angular e os comandos que usei:
*para iniciar o app*
`$ng new [Nome do Projeto]`

Depois de entrar na pasta criada, o proximo passo é:
*Para inciar o serividor*
`$ng serve`

## Sobre as pastas

- O "app.component.html" é onde o conteudo é renderizado.
- O "app.component.ts" é onde as informações do componente estão.

## Sobre o Component
Para criar um component é preciso criar a pasta onde ele vai ficar, na pasta 'app', e depois criar o component.

- É preciso importar um decorator, que segue a seguinte sintaque:
Ex: `import { metodo } from 'biblioteca/pacote'`
`import { Controller } from '@Angular/core'`

Ex: `@Decorator({ })`
`@Decorator({ })`

- Posteriormente é preciso passar para o decorator alguns metadados:
Ex: `@Decorator({
    metadado: inforamação,
})`

`@Decorator({
    selector: 'Ipsum lorem',
    template: <p>Nome do Component</p>
})`

*Sobre o Template*
Este metadado é o que vamos usar para nomear o nosso component no html.component

- Para a criação do component, é preciso criar uma classe da seguinte forma:
`export class NameDaClasse { }`

- Toda classe precisa ser exportda com `export`
- Todo component precisa ser informado ao modulo, como em mod

## Código Final


