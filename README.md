# vue-cloud-manager

> Simple file manager.

## Installation

* with **npm**
```
npm i -S vue-cloud-manager
```

## How to use

### Direct <script> Include

> see ```examples/simple```

```html
<div id="app">
  <vue-cloud-manager/>
</div>

<script src="vue-cloud-manager.js"></script>
<script type="text/javascript">
    let data = { }
    vueCloudManager.vcmData = data
</script>
```

> ```data``` must be include **root** instance

```
data = { 
    id: 0,
    name: 'root name',
    createTime: '',
    createDate: '',
    modifiedTime: '',
    modifiedDate: '',
    owner: '',
    format: 'root',
    share: '',
    data: '',
    children: []
}
```

## Development

``` bash
# clone project
git clone https://github.com/VSymonenko/vue-cloud-manager.git

# go to folder
cd vue-cloud-manager

# install dependencies
npm install

# dev server with hot reload at localhost:8888
npm run dev

# dev server with hot reload and without dashboard
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 VSymonenko