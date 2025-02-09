# **Blocos Principais**

## **Componentes**

- O primeiro componente do Angular é o `AppComponent`, definido em `app.component.ts`.
- Ele encapsula:
  - **Template:** Definido dentro do `template` da anotação `@Component` ou separado em `app.component.html`.
  - **Metadata:** Configurado dentro do `@Component`, onde são especificados seletor, estilos e template.
  - **Data Binding:** Manipulação do `title`, que foi alterado para `'homes'`.
  - **Comportamento da VIEW:** Controlado pela classe `AppComponent`.

## **Template**

- A estrutura HTML principal é definida dentro do `index.html` e do `app.component.ts`.
- O `index.html` contém a tag `<app-root>`, que carrega o `AppComponent`.
- A alteração principal foi a substituição do `<h1>` dentro do template para exibir "Hello world!".

## **Metadata**

- Configurado dentro do `@Component` em `app.component.ts`.
- O `template` foi atualizado para `<h1>Hello world!</h1>`.
- O `styleUrls` aponta para `app.component.css`.

## **Data Binding**

- O `title` foi alterado para `'homes'` dentro da classe `AppComponent`, o que pode ser usado para data binding no template futuramente.

---

# **Passo a Passo**

1. **Configuração do Ambiente**

   - Baixe o código-fonte do tutorial e abra no seu IDE.
   - No terminal, instale as dependências:
     ```sh
     npm install
     ```
   - Inicie o servidor Angular:
     ```sh
     ng serve
     ```
   - Acesse `http://localhost:4200` para visualizar o app.

2. **Exploração da Estrutura do Projeto**

   - **Arquivos principais:**
     - `index.html`: Estrutura HTML principal.
     - `styles.css`: Estilos globais.
     - `main.ts`: Ponto de entrada do Angular.
     - `app.component.ts`: Define o primeiro componente.

3. **Alteração do Projeto para exibir "Hello world"**

   - **Em \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\***``, alterar o `<title>`:
     ```html
     <title>Homes</title>
     ```
   - **Em \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\***``, alterar o template:
     ```typescript
     template: `
       <h1>Hello world!</h1>
     `,
     ```
   - **Alterar a propriedade \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\***``:
     ```typescript
     title = 'homes';
     ```

4. **Reiniciar o Servidor (se necessário)**

   - Se parou o `ng serve`, rodar novamente:
     ```sh
     ng serve
     ```
   - Acessar `http://localhost:4200` e confirmar que "Hello world!" aparece.

---
