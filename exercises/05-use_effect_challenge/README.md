# AJAX with Effects Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/05_effect_challenge/
code . # if you would like to open this in a separate VSCode window
yarn install
yarn start
```

**NOTE that when you start this application, you will see the error "Module not found: Can't resolve 'axios' in ...". You will fix this in step 1.**

If, at any time, you need to stop the app, press `ctrl+c`.

## Reason for the Challenge

As a frontend Engineer, we often have to interact with APIs and understanding the useEffect hook will make our job that much easier.

## Challenge

As a user, I would like to be greeted with one dog image, and have the ability to add more images using a dropdown.

### Instructions:

1. Install axios with `yarn add axios`. (`create-react-app` doesn't come with the Axios library, so you will need to install it separately.)
2. Create a component named "DogRender".
3. The component will render a dropdown, which will dictate the amount of dog images that will be rendered to the screen.

![](demo.gif)
