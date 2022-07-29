# React Native UI Components

Behavioral UI components for Sonr Account management and authentication.

## Installation

```sh
npm install @sonr-io/react-native-ui-components
```

## Basic usage

```sh
import { AuthComponent } from "@sonr-io/react-native-ui-components"
```

```jsx
<AuthComponent onSuccess={alert} />
```

## Storybook

The components can also be tested with Storybook + Expo.

```sh
yarn storybook
```

Storybook controls can also be run for a browser.

```sh
yarn storybook-controls
```

## Publishing

Publishing to NPM happens automatically on every GitHub release.

## Next steps

- Handle remaining authentication concepts such as pre-shared keys, keyprints, nearby devices etc
- Implement account recovery
- Implement account management component

## Folder Structure

- src/sandbox: Include a layer of abstraction to work locally with the components without calling real methods from motorkit scope.
- src/components: Where basic components were made, you will find code for buttons, text Input and containers.
- src/icons: icons used within components
- src: Source for complex screen mixing those primary components and UX
  - AuthenticationComponent: The main component to control screen navigation. It is not using StackNavigator because it will be displayed on top of another on the [beam-react-native](https://github.com/sonr-io/beam-react-native/) code. This component will be the entry point for this project.
  - AuthenticationContext: Provide react context features to support communication between screens and components.
- /storybook: contain stories folder to display component features. The /App folder should display the entire app behavior inside the storybook.
