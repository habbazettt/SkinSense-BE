-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Skin" (
    "id" SERIAL NOT NULL,
    "result" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,

    CONSTRAINT "Skin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Histories" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "image" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "skinResult" TEXT NOT NULL,

    CONSTRAINT "Histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Skin_result_key" ON "Skin"("result");

-- AddForeignKey
ALTER TABLE "Histories" ADD CONSTRAINT "Histories_skinResult_fkey" FOREIGN KEY ("skinResult") REFERENCES "Skin"("result") ON DELETE RESTRICT ON UPDATE CASCADE;
