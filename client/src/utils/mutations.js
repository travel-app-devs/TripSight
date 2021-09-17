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
  mutation addPost($title: String!, $titleImageLink: String, $textBody: String, $bodyImageLinks: [String], $postVid: String, $latitude: Float!, $longitude: Float!, $description: String, $userId: ID, $pinned: Boolean, $tags: String, $albumId: ID) {
    addPost(title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags, albumId: $albumId) {
      title
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
export const UPDATE_USERDEV = gql`
    mutation updateUserDev($_id: ID!, $profPicLink: String, $bio: String) {
        updateUserDev(_id: $_id, profPicLink: $profPicLink, bio: $bio) {
        user {
          bio
        }
      }
    }
`;

export const UPDATE_ALBUM = gql`
    mutation updateAlbum($title: String!, $imageLink: String!, $description: String!, $userId: String, $pinned: Boolean) {
        updateAlbum(title: $title, imageLink: $imageLink, description: $description, userId: $userId, pinned: $pinned) {
          title
        }
    }
`;
export const UPDATE_ALBUMDEV = gql`
    mutation updateAlbumDev($title: String!, $imageLink: String!, $description: String!, $userId: String, $pinned: Boolean) {
        updateAlbumDev(title: $title, imageLink: $imageLink, description: $description, userId: $userId, pinned: $pinned) {
          title
        }
    }
`;

export const UPDATE_POST = gql`
    mutation updatePost($title: String!, $titleImageLink: String, $textBody: String, $bodyImageLinks: [String], $postVid: String, $latitude: Int!, $longitude: Int!, $description: String, $userId: String!, $pinned: Boolean, $tags: String) {
        updatePost(title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags) {
          title
        }
    }
`;
export const UPDATE_POSTDEV = gql`
    mutation updatePostDev($title: String!, $titleImageLink: String, $textBody: String, $bodyImageLinks: [String], $postVid: String, $latitude: Int!, $longitude: Int!, $description: String, $userId: String!, $pinned: Boolean, $tags: String) {
        updatePostDev(title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags) {
          title
        }
    }
`;

export const REMOVE_POST = gql `
  mutation removePost($_id: ID!) {
    removePost(_id: $_id)
  }
`;

export const REMOVE_ALBUM = gql `
  mutation removeAlbum($_id: ID!) {
    removeAlbum(_id: $_id)
  }
`;