-- AlterTable
ALTER TABLE "Hands" ALTER COLUMN "handP1" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "handP2" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "handStatus" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Rounds" ALTER COLUMN "roundName" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Weight" ALTER COLUMN "handName" SET DATA TYPE VARCHAR(255);
