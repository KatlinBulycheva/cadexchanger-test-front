## [CONE CREATOR](https://katlinbulycheva.github.io/cadexchanger-test-front/)

**CONE CREATOR** 

## MVP functionality
1. Create a single page application (SPA), both with front-end and back-end.
2. The user should enter parameters (cone height, radius and number of segments on a circle)
via client.
3. The client should transfer the data to the server.
4. The server must compute triangulation of the cone (i.e. a set of triangles to be used for
display) and pass it back to the client.
5. The client should display computed triangulation in a 3D view using WebGL (e.g. with the
help of the three.js library).
6. Make sure your implementation neither exposes memory leaks nor overutilizes CPU on
repeated usage

## Additional functionality
The cone can be dragged, rotated and scaled in the canvas area

## Stack
- The application is implemented using the React library
- Used state manager Redux Toolkit
- Network requests are made using the REST API methodology through the Tanstack Query library
- Forms made using Formik
- 3D visualization of a cone through the Three.js library
- Assembly tool - Vite

Check out the [backend](https://github.com/KatlinBulycheva/cadexchanger-test-back) of the application

## Getting Started 
```
npm install
npm run dev
```

## Future plans
- Implement smooth representation of a cone
- Adapt for mobile devices
