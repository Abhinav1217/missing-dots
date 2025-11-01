import type { TinaField } from "tinacms";
export function blogpostFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      options: [
        "History",
        "Fashion",
        "Culture",
        "Food",
        "Travel",
        "Folklore",
        "Handloom",
        "Handicraft",
        "Random-thoughts",
        "Festivals",
      ],
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      options: [
        "Handlooms of India",
        "Story of a Coin",
        "Needle & Thread",
        "Jyotirlinga",
        "Random-Thoughts",
        "Stories of Indian Independence",
      ],
    },
    {
      type: "string",
      name: "series",
      label: "series",
      list: true,
      options: [
        "Handlooms of India",
        "Story of a Coin",
        "Needle & Thread",
        "Stories of Indian Independence",
        "Ayodhya",
      ],
    },
    {
      type: "number",
      name: "timeToRead",
      label: "Time to read",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
      list: true,
      options: ["Sapna Rani Kulshreshtha", "Abhinav Kulshreshtha"],
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ] as TinaField[];
}
