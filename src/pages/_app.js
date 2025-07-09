import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </StyleProvider>
  );
}
