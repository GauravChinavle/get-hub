# My own GraphQL

### Description
GET data as per your needs.

### How to use ?
  ```
  git clone https://github.com/GauravChinavle/trading-app.git
  cd trading-app
  npm install
  nodemon bin/www
  ```

### Technologies used
- [NodeJS](https://nodejs.org/en/) - _JavaScript runtime built on Chrome's V8 JavaScript engine_
- [ExpressJS](https://expressjs.com/) - _Fast, unopinionated, minimalist web framework for Node.js_

### Sample request
```
{
    "getProducts": {
        "fields": [
            "id",
            "title",
            "price"
        ],
        "where": [
            {
                "key": "id",
                "value": 1
            }
        ]
    },
    "getProductsDummy": {}
}
```

### Sample response
```
{
    "getProducts": [
        {
            "id": 1,
            "title": "iPhone 9",
            "price": 549
        },
        {
            "id": 1,
            "title": "Key Holder",
            "price": 30
        }
    ],
    "getProductsDummy": "API not found"
}
```
