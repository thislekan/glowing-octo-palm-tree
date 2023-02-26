#### How to setup this project

Pull the project to your local machine
run `npm install` and after the installation run `npm run dev`
to run the test, run `npm run test`

#### Architectural decisions

The app was built with Next, Typescript & SCSS (SASS). The app is a simple app that requires at most 3 components, namely: `Home`, `InputComponent` & `OutputComponent`. The InputComponent is responsible for providing the app with the user's input (numbers). The OutputComponent displays the output (the roman numerals). In the OutputComponent, the conversion of the input to the output is done in a useEffect hook.

The App's major state is kept within the Home component since the state is required in the two other components. The InputComponent & OutputComponent both maintain their own states as well. InputComponent uses the state to display error or warning messages to users when their input is not of the expected format. OutputComponent uses its own state to display the result of the input conversion.

#### Things to note

- The styling and general look of the UI is bare.
- the focus was on functionality

#### What can be improved?

- the UI could be improved

---

the url for the project can be found [here](https://glittery-piroshki-6eec08.netlify.app/)
