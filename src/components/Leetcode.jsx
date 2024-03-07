import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import {
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Tooltip,
  Progress,
  ChakraProvider,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { SiLeetcode } from "react-icons/si";

function Leetcode() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/sankalp_barriar"
        );
        const data = await res.json();

        setLeetcodeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculatePercentage = () => {
    return (
      (leetcodeData.totalSolved / leetcodeData.totalQuestions) *
      100
    ).toFixed(1);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div id="leetcode">
      <section>
        <h2>Leetcode Stats</h2>
        <div>
          <motion.div
            className="div1"
            whileInView={animations.whileInView}
            initial={animations.one}
            transition={{ delay: 0.2 }}
          >
            <Tooltip isOpen={isHovered} placement="top">
              <CircularProgress
                size={["150px", "230px"]}
                value={
                  (leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100
                }
                max={100}
                thickness="4px"
                color="orange"
                trackColor="gray"
                transition="0.3s ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <CircularProgressLabel
                  color={"white"}
                  fontSize={["30px", "45px"]}
                >
                  {isHovered
                    ? calculatePercentage() + "%"
                    : leetcodeData.totalSolved}
                </CircularProgressLabel>
              </CircularProgress>
            </Tooltip>
            <Box>
              <a href="https://leetcode.com/sankalp_barriar/" target="_blank">
                <SiLeetcode />
              </a>
            </Box>
          </motion.div>
          <div className="div2">
            <ChakraProvider>
              <Stack spacing={3}>

                <motion.div
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
                transition={{delay:0.1}}
                >
                <Flex align="center">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"white"}
                    marginRight="2"
                  >
                    Easy
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color={"rgba(255, 255, 255, 0.7)"}
                    marginLeft="2"
                  >
                    {`${leetcodeData.easySolved} / ${leetcodeData.totalEasy}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="green"
                  size="lg"
                  value={
                    (leetcodeData.easySolved / leetcodeData.totalEasy) * 100
                  }
                  height={{ base: "20px", lg: "30px" }}
                />
                </motion.div>
                 
                <motion.div
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
                transition={{delay:0.2}}
                >
                <Flex align="center">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"white"}
                    marginRight="2"
                  >
                    Medium
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color={"rgba(255, 255, 255, 0.7)"}
                    marginLeft="2"
                  >
                    {`${leetcodeData.mediumSolved} / ${leetcodeData.totalMedium}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="yellow"
                  size="lg"
                  value={
                    (leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100
                  }
                  height={{ base: "20px", lg: "30px" }}
                />
                </motion.div>

                <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
          transition={{delay: 0.2}}
        >
                <Flex align="center">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"white"}
                    marginRight="2"
                  >
                    Hard
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color={"rgba(255, 255, 255, 0.7)"}
                    marginLeft="2"
                  >
                    {`${leetcodeData.hardSolved} / ${leetcodeData.totalHard}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="red"
                  size="lg"
                  value={
                    (leetcodeData.hardSolved / leetcodeData.totalHard) * 100
                  }
                  height={{ base: "20px", lg: "30px" }}
                />
                </motion.div>
              </Stack>
            </ChakraProvider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leetcode;
