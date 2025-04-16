import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/ui/button";

function SearchButton() {
  return (
    <Button variant={"ghost"} size={"icon"}>
      <MagnifyingGlassIcon className="h-5 w-5 text-mute" />
    </Button>
  );
}

export default SearchButton;
