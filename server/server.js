const express = require("express");
const logger = require("morgan");
// const path = require('path');
const db = require('./config/connection')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;

const app = express();

let apolloServer = null;

async function serverStart() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

serverStart();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors({
//     origin: `http://localhost:${PORT}`
// }))

if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, '../client/build')));
 }

 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});