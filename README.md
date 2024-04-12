## Introduction

ChatGPT Clone - A simple chat application inspired by OpenAI's GPT-based models. This project utilizes Flask for the backend server and Next.js for the frontend interface.

## Technologies Used

This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend. One great use case of this is to write Next.js apps that use Python AI libraries on the backend.

- **Flask:** Flask is a lightweight WSGI web application framework in Python. It is used to handle backend server requests and responses.
- **Next.js:** Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It is used to develop the frontend interface of the chat application.

## How It Works

The Python/Flask server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/vercel/examples/blob/main/python/nextjs-flask/next.config.js) to map any request to `/api/:path*` to the Flask API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:5328` port, which is where the Flask server is running.

## Features

- **Chat Interface:** Allows users to interact with the ChatGPT model in a conversational manner.
- **Real-time Updates:** Messages are updated in real-time without the need for refreshing the page.
- **Responsive Design:** The frontend is designed to work seamlessly across various devices and screen sizes.
- **History Records:** Messages are recorded on the left of the page.

## Setup

### Prerequisites

- Python 3.9.18
- Node.js v20.12.1
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/smilewilson1999/chatGPT_clone_v0.git
```


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The Flask server will be running on [http://127.0.0.1:5328](http://127.0.0.1:5328) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Flask Documentation](https://flask.palletsprojects.com/en/1.1.x/) - learn about Flask features and API.
