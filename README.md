# GraphQL + React Event Booking API

1. An Event booking app created using GraphQL.
2. MongoDB
3. NodeJS
4. React.JS

1.The application allows a user to login/create an account.
2. If user is logged in they are allowed to creat events and book the events not created by them.
3. If the user is not logged in, they can only view the events.

1. Used the Data Loader library introduced by Facebook, to batch and cache query calls and results respectively. 
2. As any application might recurse into multiple calls to the backend for the same data, the data loader helps by batching all the network calls for a single node event loop and calling them all at once. 
3. Moreover, it also checks if this call has already been made, in which case the Cached promise is returned.

Images of the application:

# Usage

Install all dependencies
```sh
npm install
```

Run the server
```sh
npm start
```



This project was created with the youtube course of Academind and certain aspects of a full stack projects could be missing as the purpose of this project was purely an introduction to GraphQL and not build a full functional application.
