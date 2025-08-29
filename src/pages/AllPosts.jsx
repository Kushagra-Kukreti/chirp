import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import Loader from "../components/Loader";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 h-screen">
      <Container>
        <div className="flex flex-wrap">
          {posts.length === 0 ? (
            <div className="p-2 w-1/4">
              <Loader />
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
