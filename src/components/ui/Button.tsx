import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/libs/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium",
  {
    variants: {
      variant: {
        default: "gap-2 hover:bg-mute/30 rounded-md px-1.5 py-1.5",
        link: "underline underline-offset-4 hover:no-underline hover:bg-mute/30 h-fit rounded-sm gap-1.5 px-1 has-[>svg]:px-0.5 gap-0.5",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}
