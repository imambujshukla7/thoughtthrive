# ThoughtThrive

ThoughtThrive is a platform where users can post coding-related queries and receive auto-generated responses. The platform is designed to help users get quick solutions to their coding doubts and connect with the community for collaborative learning.

## Features

- Post coding queries without creating an account.
- Receive auto-generated responses powered by OpenAI.
- Platform owner provides additional responses with desired solutions.
- Seamless interaction with the community.

## Technologies Used

- **Frontend:**
  - React for the user interface.
  - OpenAI API for auto-generated responses.

- **Backend:**
  - Node.js with Express for the server.
  - MongoDB with Mongoose for data storage.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB server running.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/imambujshukla7/thoughtthrive.git
cd thoughtthrive
```

2. Install dependencies for the server:

```bash
cd server
npm install
```

3. Install dependencies for the client:

```bash
cd ../client
npm install
```

### Configuration

1. Create a `.env` file in the root of the `server` directory with the following content:

```dotenv
# MongoDB connection string
MONGODB_URI=mongodb://localhost:____/thoughtthrive

# Port for the server
PORT=____
```

Replace the MongoDB connection string and port with your actual values.

### Running the Application

1. Start the server:

```bash
cd server
npm start
```

2. Start the client:

```bash
cd ../client
npm start
```

The ThoughtThrive application should now be running. Access it at localhost in your web browser.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
