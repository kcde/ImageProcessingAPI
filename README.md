# Image Processing API

An API for resizing uploaded images that can be serve with whatever dimension specified by the user

## API Reference

#### get transformed image

```http
  GET /api/images?file={imageName}&height={heightNumber}&width={widthNumber}
```

NOTE:: All query parameters must be provided in order to get transformed image

## How it works

Specify in the query parameter the image you would like to transform from the /images folder, and also the width an height. if successful, A folder will be created in the /transformed folder if it has not been created. this folder will be the name of the image, and inside the folder, you can find an image with name as the dimension you requested.

E.g

```bash
/api/image?name=fjord.jpg&width=400&height=400
```

should add a folder in the transformed folder .

```
/fjord/400x400
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/kcde/ImageProcessingAPI
```

Go to the project directory

```bash
  cd ImageProcessingApi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

build

```bash
  npm run build
```

lint

```bash
  npm run lint
```

format

```bash
  npm run pretty
```

test

```bash
  npm run test
```
