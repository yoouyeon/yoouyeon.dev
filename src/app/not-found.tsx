import PageHeader from "@/components/PageHeader";
import Button from "@/components/ui/Button";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <PageHeader
        title={"404 Not Found"}
        description={"페이지를 찾을 수 없습니다."}
      />
      <Button asChild className="mt-8">
        <Link href={"/"}>
          <ArrowUturnLeftIcon className="w-4 h-4" />
          홈으로 돌아가기
        </Link>
      </Button>
    </>
  );
}
