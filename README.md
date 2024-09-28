# Dilma API - Frases Aleatórias da Dilma Rousseff

![GitHub repo size](https://img.shields.io/github/repo-size/FlavioLimaJr/Dilma-API) ![GitHub stars](https://img.shields.io/github/stars/FlavioLimaJr/Dilma-API?style=social)

**Dilma as a Service** - Uma REST API simples para obter frases aleatórias da ex-presidente do Brasil, Dilma Rousseff.

## Demo

Acesse a live demo da API [aqui](https://api.rocktdev.com.br/dilma).

## Endpoints

### Obter uma frase aleatória (JSON)

```
GET /getFrase.php?json
```

Exemplo de resposta:

```json
{
  "frase": "Nós estamos em uma crise e sairemos dela maiores, mais fortes e mais altos."
}
```

## Como usar

1. Clone este repositório:

    ```bash
    git clone https://github.com/FlavioLimaJr/Dilma-API.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd Dilma-API
    ```

3. Suba um servidor PHP:

    ```bash
    php -S localhost:8000
    ```

4. Acesse `localhost:8000/getFrase.php?json` para obter uma frase aleatória.

## Contribuições

Contribuições são bem-vindas! Fique à vontade para abrir issues e enviar pull requests.

## Contato

Siga no Instagram: [@flaaviolima_](https://instagram.com/flaaviolima_)
