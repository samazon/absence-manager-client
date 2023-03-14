# Absence Manager

Absence Manager is a web application built using React that allows company owners to manage sickness and vacations of employees. The application displays a list of absences including the names of employees and their absence details. The application also allows filtering of absences by type and date.

## Features

The following features have been implemented in the application:

- Displays a list of absences including the names of employees.
- Displays the first 10 absences, with the ability to paginate and change page size.
- Displays a total number of absences.
- Displays a total number of Confirmed/Requested/Rejected absences in Stats Panel.
- Displays member name, type of absence, period, member note (when available), status (can be 'Requested', 'Confirmed' or 'Rejected'), and admitter note (when available) for each absence.
- Allows filtering of absences by type.
- Allows filtering of absences by date.
- Displays a loading state until the list is available.
- Displays an error state if the list is unavailable.
- Displays an empty state if there are no results.

## Tech Stack

The following tech stack has been used to build the application:

- React (Vite App)
- Redux
- TypeScript
- styled-components
- @heroicons/react
- Eslint/Prettier
- Jest and react-testing-library for tests
- React Datepicker and date-fns

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

To run the project, you will need to have the following installed on your local machine:

- Node.js
- npm or yarn

### Installing

1. Clone the repository to your local machine.

```bash
git clone https://github.com/samazon/absence-manager-client
```

2. Navigate to the project directory.

```bash
cd {absence-manager-client}
```

3. Install the project dependencies using npm or yarn.

```bash
npm install
or
yarn install
```

4. Run the development server.

```bash
npm start
or
yarn start
```

Open your browser and navigate to http://127.0.0.1:5173/.

### Running the Tests

To run the tests for the application, run the following command:

```bash
npm test
or
yarn test
```

### Building the Application

To build the application for production, run the following command:

```bash
npm run build
or
yarn build
```

The build artifacts will be stored in the build directory.

### Deployed at

The application is deployed on Vercel, using github as version control.

Live: https://absence-manager-client.vercel.app/
