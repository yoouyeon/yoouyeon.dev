import { glob } from "fast-glob";
import { copy, pathExists } from "fs-extra";

async function copyAssetsToPublic() {
  // 1. contents/posts의 폴더들 가져오기
  const postDirs = await glob(`src/content/posts/*`, {
    onlyDirectories: true,
  });

  await Promise.all(
    postDirs.map(async (postDir) => {
      const srcDir = `${postDir}/assets`;
      const slug = postDir.replace(`src/content/posts/`, "");
      const destDir = `public/posts/${slug}/assets`;

      try {
        // 2. assets 폴더가 있는지 확인
        const exists = await pathExists(srcDir);
        if (!exists) {
          return;
        }
        // 3. assets 폴더가 있다면 public/posts/${slug}/assets로 복사
        await copy(srcDir, destDir, { overwrite: true });
      } catch (error) {
        console.error(`Error copying ${srcDir} to ${destDir}:`, error);
      }
    })
  );
}

await copyAssetsToPublic();
