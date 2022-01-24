# React Native Note Project


This project is about building a mobile application for note taking. It allows the user to add a new note,highlight a note  and archive it. Perphaps,the user can also mark a note as a favorite.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [React Native](https://reactnative.dev/)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [styled-components](https://styled-components.com/docs/basics#react-native)
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [jest](https://facebook.github.io/jest/)
- [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.


## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `controllers`: Folder to store all your network logic (you should have one controller per resource).
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
  - `Common`: Components shared by multiple screens
  - `store`: Folder to put all redux middlewares and the store.
  - `__testUtils__`: Folder to store tests-related utilities and components.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.
![Alt text](folder-structure.png?raw=true "Project SRC folder structure")


## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`


DEV: `yarn android` OR `react-native run-android`


PROD: `yarn android:prod`
RUN IN DEBUG MODE: use two terminals  in one terminal window  run `react-native start` and in the order `react-native run-android`


#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.


#### iOS
I am not using a macbook so I could not complile the IOS version of the app. Thus,there might be bugs in it.

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.


## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.


### Redux folders



- Store: Here you define the store shape and you can configure the persistReducer and middlewares.
- Actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- Reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.


## Screens (Home,Settings,Favorites,onboarding,editor)

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

## Testing
To run test suite,simply use the command `yarn test` if your package manager is yarn else use `npm test` for NPM
