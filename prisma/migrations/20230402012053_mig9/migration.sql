/*
  Warnings:

  - A unique constraint covering the columns `[href]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Views" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "viewsCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Views_id_fkey" FOREIGN KEY ("id") REFERENCES "Link" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Views" ("date", "id", "viewsCount") SELECT "date", "id", "viewsCount" FROM "Views";
DROP TABLE "Views";
ALTER TABLE "new_Views" RENAME TO "Views";
CREATE INDEX "Views_id_idx" ON "Views"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Link_href_key" ON "Link"("href");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");
