/*
  Warnings:

  - You are about to alter the column `clicks` on the `Link` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- CreateTable
CREATE TABLE "Views" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "viewsCount" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Views_id_fkey" FOREIGN KEY ("id") REFERENCES "Link" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "image" TEXT,
    "clicks" BIGINT NOT NULL
);
INSERT INTO "new_Link" ("clicks", "href", "id", "image", "title") SELECT "clicks", "href", "id", "image", "title" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
