/*
  Warnings:

  - You are about to drop the `Views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Views";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "View" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "viewsCount" INTEGER NOT NULL,
    "linkId" INTEGER NOT NULL,
    CONSTRAINT "View_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "View_id_key" ON "View"("id");
