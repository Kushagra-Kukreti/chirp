export const config = {
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteProjectName: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  rteApiKey: String(import.meta.env.VITE_RTE_API_KEY)
};

console.log("Appwrite url",config.appwriteUrl)
console.log("Appwrite url",config.appwriteProjectId)
console.log("Appwrite url",config.appwriteDatabaseId)
console.log("Appwrite url",config.appwriteBucketId)
console.log("Appwrite url",config.appwriteProjectName)
console.log("Appwrite url",config.rteApiKey)