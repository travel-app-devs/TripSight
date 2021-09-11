import { gql } from '@apollo/client';

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
    post(userId: $userId) {
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
    post(albumId: $albumId) {
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
    album(userId: $userId) {
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