
import React from "react";
import { motion } from "framer-motion";

// Import images
import Langchain from "../../assets/images/Langchain.svg";
import GPT4 from "../../assets/images/GPT4.svg";
import HuggingFace from "../../assets/images/HuggingFace.svg";
import GoogleVertexAI from "../../assets/images/GoogleVertexAI.svg";
import Azure from "../../assets/images/Azure.svg";
import Python from "../../assets/images/Python.svg";
import TensorFlow from "../../assets/images/TensorFlow.svg";
import DialogFlow from "../../assets/images/DialogFlow.svg";
import MetaAI from "../../assets/images/MetaAI.svg";
import Pinecone from "../../assets/images/Pinecone.svg";
import Weaviate from "../../assets/images/Weaviate.svg";
import Streamlit from "../../assets/images/Streamlit.svg";

// Tools array with both image and name
const tools = [
  { name: "LangChain", logo: Langchain },
  { name: "GPT-4", logo: GPT4 },
  { name: "HuggingFace", logo: HuggingFace },
  { name: "Google Vertex AI", logo: GoogleVertexAI },
  { name: "Azure AI", logo: Azure },
  { name: "Python", logo: Python },
  { name: "TensorFlow", logo: TensorFlow },
  { name: "DialogFlow", logo: DialogFlow },
  { name: "Meta AI", logo: MetaAI },
  { name: "Pinecone", logo: Pinecone },
  { name: "Weaviate", logo: Weaviate },
  { name: "Streamlit", logo: Streamlit },
];

const AIToolsSlider = () => {
  return (
    <div className="relative bg-black pb-12 overflow-hidden">
      <h2 className="text-center text-[#EED4AD] text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
        We Work With Cutting-Edge AI Tools
      </h2>

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        }}
      >
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="bg-[#3a6f8f] rounded-xl shadow-md flex flex-col items-center justify-center w-32 h-28 p-2"
          >
            <img
              src={tool.logo}
              alt={`logo-${index}`}
              className="h-10 object-contain mb-2"
            />
            <p className="text-white text-sm text-center">{tool.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AIToolsSlider;
