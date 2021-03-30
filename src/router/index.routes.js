import { pages } from "../controllers/index";

const content = document.getElementById("root");

export const router = async (route) => {
  content.innerHTML = "";

  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    case "#/products":
      return console.log("PRODUCTS");
    case "#/posts":
      return content.appendChild(await pages.posts());
    default:
      return content.appendChild(pages.notFound());
  }
};
