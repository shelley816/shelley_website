"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Wrap from "@/components/ui/Wrap";

export default function NotFound() {
  return (
    <Wrap areaLink="aboutSection">
      <div className="outer-wrapper h-screen!">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-0!"
        >
          404 Not Found
        </motion.h2>
        <div className="relative w-11/12 md:w-8/12 mt-10 mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            你穿越到了不存在的平行宇宙。
            <br />
            這個頁面不存在，或已被黑洞吞噬。
          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="buttonBox w-50 mx-auto">
            <Link
              href="/"
              className="inline-block mt-5 text-center text-lg font-bold text-white bg-[#00BCCF] rounded-full px-6 py-2"
            >
              返回首頁
            </Link>
          </motion.div>
        </div>
      </div>
    </Wrap>
  );
}
