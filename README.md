
# Image Processing API

An API for resizing uploaded images that can be serve with whatever dimension specified by the user


## API Reference

#### get transformed image

```http
  GET /api/images?file={imageName}&height={heightNumber}&width={widthNumber}
```

NOTE:: All query parameters must be provided in order to get transformed image



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