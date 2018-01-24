# sourcetree vs terminal

The project is build with `veams-cli`. You can add or modify settings in the provided `veams-cli.json`.

`Veams-cli` is responsible for the initial setup as well as for the scaffolding process of blueprints.
Every task and configuration files are exposed in the `configs` folder.

For more information take a look at the Veams documentation.
- Veams Overview: https://github.com/Sebastian-Fitzner/Veams
- Veams Website: http://veams.org/

------------------

## Folder Structure

------------------

### Basic Files and Folders

The app contains multiple sections which have its own responsibility. In general the structure looks like that:

``` bash
├── app.js
├── app.events.js
├── app.veams.js
├── app.scss
├── assets
│   ├── fonts
│   ├── icons
│   ├── img
│   └── media
├── core
│   ├── components
│   ├── layouts
│   ├── store
│   └── styles
│       ├── base.scss
│       ├── get-media.scss
│       ├── modifiers.scss
│       └── print.scss
├── features(*)
├── pages
└── shared
    ├── components
    ├── styles
        ├── _shared.scss
        ├── _vars.scss
        ├── helpers
        │   ├── _helpers.scss
        │   └── functions
        └── icons
└── utilities
```

### App Files

``` bash
├── app.js
├── app.veams.js
├── app.events.js
└── app.scss
```

These files are the main entry point of our application.

### Assets

As the folder says, it contains all the assets like images, fonts, svg icons and more which we can use project wide.

### Core

``` bash
├── core
    ├── components
    ├── layouts
    ├── store (*)
    └── styles
        ├── base.scss
        ├── get-media.scss
        ├── modifiers.scss
        └── print.scss
```

The core is responsible for the project specific setup. It contains components and states which define the base of the application.

Core Components are global components which are app specific, means you cannot share these components project wide.

__Examples__

- Header
- Navigation
- Footer

#### Layouts

The layout contains the general structure of the application. It is responsible for the general rendering of the application.

#### Styles

The styles folder contains all important global styles like:

- reset
- base
- modifiers

------------------

## Tasks

------------------

### Server

The provided express server instance exposes an API which you can use to work with your file system.

The API Server is a mock server which can be used in a really simple way.

Just add your JSON mocks to `src/server/mocks/${endpoint}` and
make sure that you already have an endpoint available in `src/server/api/${endpoint}`.

After that you can reach that endpoint at the following location:

- `/api/${endpoint}` => You will get all mocks in an array.
- `/api/${endpoint}/${filename}` => You will get a specific mock by using the filename as Id.

#### Add endpoint to API ([`veams-bp-mock-api-endpoint`](https://github.com/Veams/veams-bp-mock-api-endpoint))

You can easily add a new endpoint by using `veams-cli`.

Just execute the following command `veams add api [name]`.

This will create a new folder in `server/routes/`.
The only thing you have to do is referencing the file in `server/routes/index.js` by adding the snippets from `USAGE.md`.


#### Fake Data Generation (`configs/tasks/faker/faker.js`)

You can generate fake data files by using the provided task.
Therefore you need to create a preset file and save it in the presets folder of the task.

The output is saved in the `mocks` folder of your server.
You can configure the destination path in `veams-cli.json`.

To generate fake data execute the following commands:

``` bash
npm run faker ${presetName} ${length}
```

__Examples__

1. `npm run faker example` => Generate 10 fake data files by using example preset.
1. `npm run faker example 100` => Generate 100 fake data files by using example preset.

__Presets__

Custom presets are easy to create.
Just take a look add the preset files in the task folder and use the [API from `faker.js`](http://marak.github.io/faker.js/faker.html).

