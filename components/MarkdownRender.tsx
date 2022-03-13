import ReactMarkdown from "react-markdown";
import path from "path";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styles from "../styles/MarkdownRender.module.css";

type MarkdownProps = {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  content: string | undefined;
};

const components = (markdownProps: MarkdownProps) => {
  return {
    img: ({ ...props }: any) => {
      const src =
        "https://" +
        path.join(
          "raw.githubusercontent.com/xryuseix/xryuseix.github.io/tree/master/news/",
          markdownProps.title ?? "",
          props.src as string
        );
      return <img src={src} alt={props.alt} style={{ width: "80%" }} />;
    },
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          {...props}
          className={styles.code}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className} ${styles.inlineCode}`} {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ node, children, ...props }: any) => {
      return <blockquote className={styles.blockQuote}>{children}</blockquote>;
    },
  };
};

const MarkdownRender = (props: MarkdownProps): JSX.Element => {
  return (
    <ReactMarkdown components={components(props)}>
      {props.content ?? ""}
    </ReactMarkdown>
  );
};

export default MarkdownRender;

export type PostPropType = {
  postData: {
    title: string;
    description: string;
    date: string;
    contentHtml: string;
  };
};
