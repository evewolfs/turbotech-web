import React from "react"
import { motion } from "framer-motion"

export const Expert = ({ className }) => (
  <motion.svg  viewBox="0 0 180 180" style={{width:'100px'}}  className={className}>
   <circle
        cx="90"
        cy="90"
        r="81"
        fill="none"
        stroke="#FF9600"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></circle>
      <path
        fill="none"
        stroke="#FF9600"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M90 22.7L101.4 32.8 115.8 27.8 122.4 41.5 137.6 42.4 138.5 57.6 152.2 64.2 147.2 78.6 157.3 90 147.2 101.4 152.2 115.8 138.5 122.4 137.6 137.6 122.4 138.5 115.8 152.2 101.4 147.2 90 157.3 78.6 147.2 64.2 152.2 57.6 138.5 42.4 137.6 41.5 122.4 27.8 115.8 32.8 101.4 22.7 90 32.8 78.6 27.8 64.2 41.5 57.6 42.4 42.4 57.6 41.5 64.2 27.8 78.6 32.8z"
      ></path>
      <path
        fill="none"
        stroke="#FF9600"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M90 53.9L101.7 77.7 127.9 81.5 109 100 113.5 126.1 90 113.8 66.5 126.1 71 100 52.1 81.5 78.3 77.7z"
      ></path>
      </motion.svg>
)
