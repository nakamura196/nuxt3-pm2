import Fuse from "fuse.js";

export default defineEventHandler(async (event) => {
  // const query = getQuery(event);

  const list = [
    {
      title: "Old Man's War",
      author: "John Scalzi",
      tags: ["fiction"],
    },
    {
      title: "The Lock Artist",
      author: "Steve",
      tags: ["thriller"],
    },
    {
      title: "Old Man's War",
      author: "John Scalzi",
      tags: ["fiction"],
    },
    {
      title: "The Lock Artist",
      author: "Steve",
      tags: ["thriller"],
    },
  ];

  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ["author", "tags"],
  };

  const fuse = new Fuse(list, options);

  const result = fuse.search("tion");

  return result;
});
