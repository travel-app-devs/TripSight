import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ALBUM = gql`
    mutation addAlbum($title: String!, $imageLink: String, $description: String, $userId: String!) {
        addAlbum(title: $title, imageLink: $imageLink, description: $description, userId: $userId) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($title: String!, $titleImageLink: String, $textBody: String, $bodyImageLinks: [String], $postVid: String, $latitude: Int!, $longitude: Int!, $description: String, $userId: String!, $pinned: Boolean, $tags: String) {
        addPost(title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($username: String!, $email: String!, $password: String!, $firstName: String, $lastName: String, $profPicLink: String, $bio: String) {
        updateUser(username: $username, email: $email, password: $password, firstName: $firstName) {
          token
            user {
                _id
                username
            }
        }
    }
`;

export const UPDATE_ALBUM = gql`
    mutation updateAlbum($title: String!, $imageLink: String!, $description: String!, $userId: String, $pinned: Boolean) {
        updateAlbum(title: $title, imageLink: $imageLink, description: $description, userId: $userId, pinned: $pinned) {
          token
            user {
                _id
                username
            }
        }
    }
`;

export const UPDATE_POST = gql`
    mutation updatePost($title: String!, $titleImageLink: String, $textBody: String, $bodyImageLinks: [String], $postVid: String, $latitude: Int!, $longitude: Int!, $description: String, $userId: String!, $pinned: Boolean, $tags: String) {
        updatePost(title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags) {
            token
            user {
                _id
                username
            }
        }
    }
`;