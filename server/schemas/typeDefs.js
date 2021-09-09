const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
    profPicLink: String
    bio: String
    favorites: [Post]
    date: Date
  }

  type Album {
    _id: ID!
    title: String!
    imageLink: String
    description: String
    posts: [Post]!
    userInfo: {
        userId: User
        pinned: Boolean
    }
  }

  type Post {
    _id: ID!
    title: String!
    titleImageLink: String
    bodyImageLinks: [String]
    latitude: Number!
    longitude: Number!
    userInfo: {
        userId: User
        pinned: Boolean
    }
    albumId: Album
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    posts: [Post]
    albums: [Album]
    user(_id: ID!): User
    post(_id: ID!): Post
    album(_id: ID!): Album
    userPosts(userInfo: {id: ID!}): [Post]
    userAlbums(userInfo: {id: ID!}): [Album]
    albumPosts(albumId: ID!): [Post]
  }

  type Mutation {
    addUser(
        username: String! 
        email: String! 
        password: String!
        firstName: String
        lastName: String
        profPicLink: String
        bio: String
        date: Date
    ): Auth
    login(email: String! password: String!): Auth
    addAlbum(
        title: String!
        imageLink: String
        description: String
        userInfo: {
            userId: User
            pinned: Boolean
        }
    ): Album
    addPost(
        title: String! 
        titleImageLink: String
        textBody: String
        bodyImageLinks: [String]
        latitude: Number!
        longitude: Number!
        description: String
        userInfo: {
            userId: User
            pinned: Boolean
        }
    ): Post
    updateUser(
        username: String! 
        email: String! 
        password: String!
        firstName: String
        lastName: String
        profPicLink: String
        bio: String
        date: Date
    ): Auth
    updateAlbum(
        title: String!
        imageLink: String
        description: String
        userInfo: {
            userId: User
            pinned: Boolean
        }
    ): Album
    updatePost(
        title: String! 
        titleImageLink: String
        textBody: String
        bodyImageLinks: [String]
        latitude: Number!
        longitude: Number!
        description: String
        userInfo: {
            userId: User
            pinned: Boolean
        }
    ): Post
    removePost(_id: ID!): Post
    removeAlbum(_id: ID!): Album
  }
`;

module.exports = typeDefs;