# Deployed application

- Project at expo by scanning the QR code  
  Project page: https://expo.io/@senseiwithblackbelt/signal-clone
- Hosting URL: Hosting URL: https://signal-clone-898a3.web.app

## Functionality of Signal clone application

- Visitors can register using Full name, Email, password and image url (optional)
- After login screen user is redirected to application page with chat rooms.
- User can create new chat by clicking pencil icon on header.
- User is redirected to Add chat room page. User can create new chat with name.
- On Main page every latest message of the chat room with Avatar is shown.
- By clicking the desired chat room user can join chat and send messages.
- User can logout from by clicking the button on upper right corner of Main page.

## ReactNative Signal clone application

- This is a clone of Signal chat application
- Need to login first by google to send messages
- Simple design of Signal
- Hosted in Firebase

## Stack and framework used

- ReactNative
- HTML
- CSS
- JavaScript
- ES6
- Email login functionality
- Firebase Authentication
- Firestore Database
- Firebase Hosting

## Publish/Deploy

- firebase login
- firebase init
  - 1. Hosting: Configure and deploy Firebase hosting sites
  - 2. Use an existing project and choose desired project
  - 3. Public directory: web-build
  - 4. Configure as a single-page app: y
  - 5. Set up automatic builds and deploy with GitHub: N
- expo publish
- expo build:web
- firebase deploy

## Installation of needed Packages for application uging npm or yarn

- yarn add @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- yarn add @react-navigation/stack
- yarn add react-native-elements
- expo install firebase
- npm install -g firebase-tools
