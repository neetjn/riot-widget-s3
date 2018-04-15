# riot-widget-s3

Generate a Riot.js widget on the fly, upload to s3, and generate your own custom templates.

## About

This tool was created to quickly and seamlessly generate Riot.js widgets on the fly. This can be especially helpful when building isolated components for CMS/CMF based websites with isolated CSS and js.

## Configuration

AWS configuration and widget specifications can be modified via `config.json`.

## Use

The component source can be modified in `src/widget.tag`.

### Compiling + Uploading

To compile your widget and upload to s3, use the following command:

```
npm run build
```

The compiled component will be dropped on your local file system at `dist/<widget-name>.js`. The s3 object will be displayed via stdout.

### Compiling + Uploading + Templating

For templating on the fly with your uploaded component, refer to `src/template.hbs`.

```
npm run template
```

This will build, upload your component and generate your template for you.

---

Copyright (c) 2018 John Nolette Licensed under the MIT license.