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