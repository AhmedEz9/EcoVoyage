import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.EcoVoyage",
  projectId: "663774d3003c2d92e023",
  databaseId: "663777ea00208a13b4a6",
  userCollectionId: "663779e0003c73df1171",
  travelCollectionId: "66377a3000178578cd43",
  storageId: "66377ea500125e90556c",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
      try {
        const newAccount = await account.create('unique()', email, password, username);
        await signIn(email, password); // Automatically log in after signing up
        return newAccount;
      } catch (error) {
        console.error('Create User Failed:', error.message);
        throw new Error('Create User Failed: ' + error.message);
      }
    }

  export const checkSession = async () => {
    try {
      const session = await account.getSession('current');
      return session;
    } catch (error) {
      return null;
    }
  }

  export const logout = async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.error('Logout Failed:', error.message);
      throw new Error('Logout Failed: ' + error.message);
    }
  }

  export const signIn = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      console.error('Sign In Failed:', error.message);
      throw new Error('Sign In Failed: ' + error.message);
    }
  }
    

  export const getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        config.databaseId,
        config.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
    }
  }