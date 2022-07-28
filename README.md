## React Native UI Components

Behavioral UI components for Sonr Account management and authentication.

### Installation

```
npm install @sonr-io/react-native-ui-components
```

### Basic usage

```
import { AuthComponent } from "@sonr-io/react-native-ui-components"
```

```
<AuthComponent onSuccess={alert} />
```

### Storybook

The components can also be tested with Storybook + Expo.

```
yarn storybook
```

Storybook controls can also be run for a browser.

```
yarn storybook-controls
```

### Publishing

Publishing to NPM happens automatically on every GitHub release.

### Next steps

- Handle remaining authentication concepts such as pre-shared keys, keyprints, nearby devices etc
- Implement account recovery
- Implement account management component
