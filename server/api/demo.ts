export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const items = [
    {
      title: "title 1",
    },
    {
      title: "title 2",
    },
  ];

  const page = Number(query.page) - 1 || 0;

  const results = items[page];

  return [results];
});
