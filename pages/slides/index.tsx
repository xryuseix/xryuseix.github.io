/** @format */

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SlidesList from "../../components/data/pdfList";

const RedirectPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/slides/${SlidesList()[0].title}`);
  }, [router]);
  return null;
};

export default RedirectPage;
