// Set context upon visiting the dashboard (thus it will happen when the user logs in or signs up)
// Use the query, remove all other uses of it
import { createContext } from 'react';

const UserContext = createContext({})

export default UserContext