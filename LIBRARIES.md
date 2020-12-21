# Libraries used

### React Native / Expo / React

**Why**: We use React Native to develop cross-platform application with Javascript. It's the core component. We use Expo because it is now the recommended way to kickstart a React Native application ( as create-react-native-app wash deprecated in favor of expo ).
**Where**: It's the core component, so basically everywhere.

## React-Navigation

**Why**: Recommended way to handle application navigation. It was actually coming with the recommended `expo` starter.
**Where**: Mostly in `./navigation` folder


## expo-av
**Why**: In order to play the track's preview, we need a player and we'll use this module for this reason
**Where**: only in the player component //TODO: check when finished

## redux
**why** We need to show the playing track at the bottom of all screens. To keep the state of the app across these screen when need redux
**Where** Everywhere in the app if i get time