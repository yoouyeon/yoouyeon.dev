import { SunIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/ui/button";

function ThemeButton() {
  return (
    <Button variant={"ghost"} size={"icon"}>
      <SunIcon className="h-5 w-5 text-mute" />
    </Button>
  );
}

export default ThemeButton;
