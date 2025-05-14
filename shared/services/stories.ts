import { Story, StoryItem } from "@prisma/client" /*2f*/;
import { axiosInstance } from "./instance";

export type IStory = Story & {
  items: StoryItem[];
}; /*2a*/

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>("/stories"); /*2b*/
  return data /*2c*/;
};

// 2d. Go to schema.prisma in prisma folder and create the following information:
/*
model Story {
    id Int @id @default(autoincrement())
    previewImageUrl String
    items StoryItem[]
    createAt DateTime @default(now())
}

model StoryItem {
    id Int @id @default(autoincrement())
    storyId Int
    story Story @relation(fields: [storyId], references: [id])
    sourceUrl String
    createdAt DateTime @default(now())
}
*/
// 2e. Terminal: npm run prisma:push
// 2g. Go to api-client.ts in services of shared
