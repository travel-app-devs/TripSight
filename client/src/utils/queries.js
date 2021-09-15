import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      firstName
      lastName
      profPicLink
      bio
      favorites
    }
  }
`;
export const QUERY_THISUSER = gql`
  query thisUser($_id: ID!) {
    thisUser(_id: $_id) {
      _id
      username
      email
      firstName
      lastName
      profPicLink
      bio
      favorites
    }
  }
`;
export const QUERY_THISUSERPOSTS = gql`
  query thisUserPosts($userId: User!) {
    thisUserPosts(userId: $userId) {
      _id
      title
      titleImageLink
      bodyImageLinkspostVid
      description
      pinned
      tags
      latitude
      longitude
      userId
      albumId
    }
  }
`;
export const QUERY_THISUSERALBUMS = gql`
  query thisUserAlbums($userId: User!) {
    thisUserAlbums(userId: $userId) {
      _id
      title
      imageLinkdescription
      posts {
        _id
        title
        titleImageLink
        bodyImageLinkspostVid
        description
        pinned
        tags
        latitude
        longitude
        userId
        albumId
      }
      userId
      pinned
    }
  }
`;

export const QUERY_ALBUM = gql`
  query album($_id: ID!) {
    album(_id: $_id) {
      _id
      title
      imageLinkdescription
      posts {
        _id
        title
        titleImageLink
        bodyImageLinkspostVid
        description
        pinned
        tags
        latitude
        longitude
        userId
        albumId
      }
      userId
      pinned
    }
  }
`;

export const QUERY_POST = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      titleImageLink
      bodyImageLinkspostVid
      description
      pinned
      tags
      latitude
      longitude
      userId
      albumId
    }
  }
`;

export const QUERY_USERPOSTS = gql`
  query userPosts($userId: ID!) {
    userPosts(userId: $userId) {
      _id
      title
      titleImageLink
      bodyImageLinkspostVid
      description
      pinned
      tags
      latitude
      longitude
      userId
      albumId
    }
  }
`;

export const QUERY_ALBUMPOSTS = gql`
  query albumPosts($albumId: ID!) {
    albumPosts(albumId: $albumId) {
      _id
      title
      titleImageLink
      bodyImageLinkspostVid
      description
      pinned
      tags
      latitude
      longitude
      userId
      albumId
    }
  }
`;

export const QUERY_USERALBUMS = gql`
  query userAlbums($userId: ID!) {
    userAlbums(userId: $userId) {
      _id
      title
      imageLinkdescription
      posts {
        _id
        title
        titleImageLink
        bodyImageLinkspostVid
        description
        pinned
        tags
        latitude
        longitude
        userId
        albumId
      }
      userId
      pinned
    }
  }
`;


export const QUERY_PLACEPOSTS = gql`
  query placePosts($latitude: Float!, $longitude: Float!) {
    posts {
      title
      latitude
      longitude
      _id
      tags
    }
  }
`;  

export const QUERY_ALLPOSTS = gql`
  query allPosts {
    posts {
      _id
      title
      latitude
      longitude
      tags
    }
  }
`;
