# Notas de Estudo - Criando um Componente no Angular v19

## Visão Geral
No Angular, os aplicativos são construídos a partir de **componentes**, que encapsulam código, layout HTML e estilos CSS. Cada componente pode conter outros componentes, permitindo a modularização da aplicação.

## Estrutura de um Componente Angular
Os componentes Angular possuem **metadados** que definem suas propriedades. As principais propriedades são:
- **selector**: define como o componente é referenciado nos templates.
- **standalone**: indica se o componente requer um **NgModule**.
- **imports**: lista as dependências do componente.
- **template**: define o layout e a marcação HTML do componente.
- **styleUrls**: lista os arquivos CSS utilizados pelo componente.

## Criando um Componente `HomeComponent`

### Passo 1: Gerar o Componente
No terminal, dentro do diretório do projeto, execute:
```sh
ng generate component home
```
Isso criará a estrutura do componente no diretório `src/app/home`.

### Passo 2: Executar o Aplicativo
Para rodar o projeto no ambiente local:
```sh
ng serve
```
Abra um navegador e acesse `http://localhost:4200` para visualizar a aplicação.

## Adicionando `HomeComponent` ao Aplicativo

### Passo 1: Importar o Componente
No arquivo `src/app/app.component.ts`, adicione a seguinte linha para importar o **HomeComponent**:
```typescript
import { HomeComponent } from './home/home.component';
```

### Passo 2: Atualizar o `AppComponent`
Edite `@Component` no arquivo `app.component.ts`:
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
```

### Passo 3: Atualizar o `HomeComponent`
No arquivo `src/app/home/home.component.ts`, substitua o template por:
```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
```

### Passo 4: Atualizar os Estilos
No arquivo `src/app/home/home.component.css`, adicione:
```css
.results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}

input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}

button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
}

@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}

@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}
```

## Testando a Aplicação
Após salvar todas as alterações, se o **`ng serve`** estiver rodando, a aplicação será recarregada automaticamente. Caso contrário, reinicie o servidor:
```sh
ng serve
```
Abra o navegador em `http://localhost:4200` e verifique se o **HomeComponent** foi carregado corretamente.

## Resumo
Nesta lição, você aprendeu a:
- Criar um novo componente no Angular (`HomeComponent`).
- Importar e adicionar o componente ao aplicativo.
- Criar um formulário de pesquisa básico dentro do `HomeComponent`.
- Aplicar estilos ao formulário.

Para mais informações, consulte:
- [Documentação do Angular sobre Componentes](https://angular.io/guide/component-overview)
- [Comando `ng generate component`](https://angular.io/cli/generate)
