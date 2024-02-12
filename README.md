# Angular v10 WebComponents Project

This repository holds a Web Component built with Angular  10, designed to integrate seamlessly with any modern front-end application, regardless of the underlying framework. By including a few script tags in your HTML, you can start using the `<card-beneficiario>` component immediately.

```html
<html>
  <head>
    <!-- Polyfills for older browsers -->
    <script src="./polyfills.js" nomodule></script>
    <!-- Angular dependencies -->
    <script src="./vendor.js" defer></script>
    <!-- Runtime and main bundle -->
    <script src="./runtime.js" type="module"></script>
    <script src="./main.js" type="module"></script>
    <!-- Styles -->
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <!-- Your Web Component -->
    <card-beneficiario></card-beneficiario>
  </body>
</html>
```

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

## Quick Start

To set up the development environment:

1. Clone the repository.
2. Run `npm install` to install the project dependencies.
3. Start the development server with `ng serve`.

## Development Server

After running `ng serve`, navigate to `http://localhost:4200/` to view the application. The app will automatically reload if you change any of the source files.

## Building the Project

To build the project for production, run:

```bash
ng build --prod
```

This command compiles the application and stores the output in the `dist/` directory.

## Testing

This project includes both unit tests and end-to-end tests.

- **Unit Tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing

We welcome contributions! Please read through our contributing guidelines to learn how you can contribute to this project.

## License

This project is licensed under the terms of the MIT license. See the `LICENSE` file for details.

## Additional Resources

- For further help with Angular CLI, use `ng help` or refer to the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
- To learn more about Web Components, explore resources such as the [MDN Web Components guide](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

---

Please note that the above README has been improved for clarity, organization, and added sections like prerequisites, quick start, building, testing, contributing, and license. It's essential to keep your README clear and informative to help others understand your project and how they can contribute to it.
