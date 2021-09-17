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
  }

  type Album {
    _id: ID!
    title: String!
    imageLink: String
    description: String
    posts: [Post]!
    userId: User
    pinned: Boolean
  }

  type Post {
    _id: ID!
    title: String!
    textBody: String
    titleImageLink: String
    bodyImageLinks: [String]
    postVid: String
    description: String
    pinned: Boolean
    tags: String
    place: String!
    userId: User
    albumId: Album
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    allPosts: [Post]
    albums: [Album]
    user(_id: ID!): User
    thisUser(_id: ID!): User
    thisUserPosts(userId: ID!): [Post]
    thisUserAlbums(userId: ID!): [Album]
    post(_id: ID!): Post
    album(_id: ID!): Album
    userPosts(userId: ID!): [Post]
    userAlbums(userId: ID!): [Album]
    albumPosts(albumId: ID): [Post]
    placePosts(place: String!): [Post]
  }

  type Mutation {
    addUser(
        username: String! 
        email: String! 
        password: String!
    ): Auth
    login(email: String! password: String!): Auth
    addAlbum(
        title: String!
        imageLink: String
        description: String
        userId: ID!
        pinned: Boolean
    ): Album
    addPost(
        title: String! 
        titleImageLink: String
        textBody: String
        bodyImageLinks: [String]
        postVid: String
        place: String!
        description: String
        userId: ID
        pinned: Boolean
        tags: String
        albumId: ID
    ): Post
    updateUser(
        _id: ID!
        username: String 
        email: String
        password: String
        firstName: String
        lastName: String
        profPicLink: String
        bio: String
    ): Auth
    updateUserDev(
        _id: ID!
        username: String
        email: String
        firstName: String
        lastName: String
        profPicLink: String
        bio: String
    ): Auth
    updateAlbum(
        _id: ID!
        title: String
        imageLink: String
        description: String
        userId: String
        pinned: Boolean
    ): Album
    updateAlbumDev(
        _id: ID!
        title: String
        imageLink: String
        description: String
        userId: String
        pinned: Boolean
    ): Album
    updatePost(
        _id: ID!
        title: String 
        titleImageLink: String
        textBody: String
        bodyImageLinks: [String]
        postVid: String
        place: String
        description: String
        userId: String!
        pinned: Boolean
        tags: String
        albumId: ID
    ): Post
    updatePostDev(
        _id: ID!
        title: String 
        titleImageLink: String
        textBody: String
        bodyImageLinks: [String]
        postVid: String
        place: String
        description: String
        userId: String
        pinned: Boolean
        tags: String
        albumId: ID
    ): Post
    removePost(_id: ID!): Post
    removeAlbum(_id: ID!): Album
  }
`;

module.exports = typeDefs;