# SPA Template

This is a Single Page Application (SPA) template built with Expo, React Native, Tamagui, and Redux Toolkit. It provides a minimal starting point for creating new SPAs with a consistent tech stack.

## Features

- Expo for easy development and deployment
- React Native for cross-platform compatibility
- Tamagui for UI components and theming
- Redux Toolkit for state management
- TypeScript for type safety
- Minimal project structure for quick start

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Start the development server:
   ```
   yarn start
   ```

## Project Structure
```
spa-template/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ └── index.tsx
│ ├── components/
│ │ └── Welcome.tsx
│ ├── features/
│ │ └── api/
│ │ └── apiSlice.ts
│ └── styles/
│ └── app.css
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
├── tamagui.config.ts
└── tsconfig.json
```
## Key Components

### App Layout

The main app layout is defined in:

### Welcome Component

The Welcome component is a sample component showcasing basic Tamagui usage:

### API Slice

The API slice is set up for making API calls using Redux Toolkit Query:

## Configuration

### Tamagui Configuration

Tamagui is configured in `tamagui.config.ts`:

### Babel Configuration

Babel is configured in `babel.config.js`:

## Scripts

- `yarn start`: Start the Expo development server
- `yarn android`: Start the app on an Android emulator/device
- `yarn ios`: Start the app on an iOS simulator/device
- `yarn web`: Start the app in a web browser

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
