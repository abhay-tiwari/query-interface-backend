import app from "./src/server";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
