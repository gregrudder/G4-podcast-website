import type { ComponentProps } from "react";

function MdxLink(props: ComponentProps<"a">) {
  const href = props.href ?? "";
  const external = href.startsWith("http");
  return (
    <a
      {...props}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {props.children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

export const mdxComponents = {
  a: MdxLink,
};
